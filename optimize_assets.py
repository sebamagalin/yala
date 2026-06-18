import os
import cv2
from PIL import Image

def setup_directories():
    dirs = [
        "assets",
        "assets/images",
        "assets/hero",
        "assets/icons"
    ]
    for d in dirs:
        if not os.path.exists(d):
            os.makedirs(d)
            print(f"Created directory: {d}")

def optimize_hero_images():
    # 5 Key frame JPEGs
    hero_frames = [
        ("elimina_la_urna_de_cristal_202606171802.jpeg", "assets/hero/frame_1.webp"),
        ("Introduce_la_mano_de_la_202606171802.jpeg", "assets/hero/frame_2.webp"),
        ("haz_que_la_mano_encienda_202606171802.jpeg", "assets/hero/frame_3.webp"),
        ("elimina_la_mano_2K_202606171802 (1).jpeg", "assets/hero/frame_4.webp"),
        ("elimina_la_mano_2K_202606171802.jpeg", "assets/hero/frame_5.webp")
    ]
    
    for src, dest in hero_frames:
        if os.path.exists(src):
            try:
                img = Image.open(src)
                # Resize to standard full HD to keep it crisp but lightweight
                img.thumbnail((1920, 1080))
                img.save(dest, "WEBP", quality=80)
                print(f"Optimized {src} -> {dest} (Size: {os.path.getsize(dest)/1024:.1f} KB)")
            except Exception as e:
                print(f"Error optimizing {src}: {e}")
        else:
            print(f"Source file not found: {src}")

def extract_video_frames():
    # We will extract 8 frames from Video 1 (remove glass dome) and 8 frames from Video 2 (light match)
    # This will give us a smooth 16-frame animation if we want to use a more fluid scroll-controlled ritual!
    video1 = "Hand_removes_glass_urn_candle_202606171742.mp4"
    video2 = "Hand_lighting_candle_quickly_202606171746.mp4"
    
    frames_extracted = []
    
    # Process Video 1 (Frame 0 to Frame 15)
    if os.path.exists(video1):
        cap = cv2.VideoCapture(video1)
        total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
        # Take 8 equidistant frames
        indices = [int(i * (total_frames - 1) / 7) for i in range(8)]
        for idx, frame_idx in enumerate(indices):
            cap.set(cv2.CAP_PROP_POS_FRAMES, frame_idx)
            ret, frame = cap.read()
            if ret:
                dest_path = f"assets/hero/video_frame_{idx:02d}.webp"
                # Convert color from BGR to RGB for PIL
                rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
                img = Image.fromarray(rgb_frame)
                img.thumbnail((1280, 720)) # Optimize resolution for scrollport
                img.save(dest_path, "WEBP", quality=75)
                frames_extracted.append(dest_path)
        cap.release()
        print(f"Extracted 8 frames from {video1}")
        
    # Process Video 2 (Frame 16 to Frame 31)
    if os.path.exists(video2):
        cap = cv2.VideoCapture(video2)
        total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
        # Take 8 equidistant frames
        indices = [int(i * (total_frames - 1) / 7) for i in range(8)]
        for idx, frame_idx in enumerate(indices):
            cap.set(cv2.CAP_PROP_POS_FRAMES, frame_idx)
            ret, frame = cap.read()
            if ret:
                dest_path = f"assets/hero/video_frame_{idx+8:02d}.webp"
                # Convert color
                rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
                img = Image.fromarray(rgb_frame)
                img.thumbnail((1280, 720))
                img.save(dest_path, "WEBP", quality=75)
                frames_extracted.append(dest_path)
        cap.release()
        print(f"Extracted 8 frames from {video2}")

def process_product_catalog_images():
    # Let's map representative high-quality files from the workspace to our 7 catalog items.
    product_mappings = {
        "egg_lemon_eucalyptus.webp": "PXL_20240813_232709023.PORTRAIT.jpg", # Egg shaped candles
        "egg_lavender.webp": "PXL_20240813_233251876.PORTRAIT.jpg",
        "egg_vanilla.webp": "PXL_20240813_233640305.PORTRAIT.jpg",
        "luxury_lemon_verbena.webp": "PXL_20240813_234058323.PORTRAIT.jpg", # Luxury candles
        "luxury_orange_cinnamon.webp": "YALA/FOTOS/Care Candles.png",
        "luxury_fresh_spring.webp": "YALA/FOTOS/Cristal candles.png",
        "luxury_rose_fruit.webp": "YALA/FOTOS/Rose Fruit Temt.png"
    }
    
    for dest_name, src_path in product_mappings.items():
        dest_path = f"assets/images/{dest_name}"
        
        # Check in root first, then in YALA/FOTOS, then in YALA/
        paths_to_check = [
            src_path,
            os.path.join("YALA/FOTOS", os.path.basename(src_path)),
            os.path.join("YALA", src_path),
            os.path.basename(src_path)
        ]
        
        found = False
        for p in paths_to_check:
            if os.path.exists(p):
                try:
                    img = Image.open(p)
                    # Crop/resize to square for the product grid
                    w, h = img.size
                    min_dim = min(w, h)
                    # Center crop
                    left = (w - min_dim) / 2
                    top = (h - min_dim) / 2
                    right = (w + min_dim) / 2
                    bottom = (h + min_dim) / 2
                    cropped = img.crop((left, top, right, bottom))
                    
                    cropped.thumbnail((600, 600))
                    cropped.save(dest_path, "WEBP", quality=80)
                    print(f"Optimized product {p} -> {dest_path} (Size: {os.path.getsize(dest_path)/1024:.1f} KB)")
                    found = True
                    break
                except Exception as e:
                    print(f"Error processing product image {p}: {e}")
        
        if not found:
            # Fallback to general high-res picture if not found
            fallback_srcs = ["YALA/FOTOS/IMG_0556.JPG", "IMG_0556.JPG", "YALA/FOTOS/IMG_0560.JPG", "IMG_0560.JPG"]
            for fallback_src in fallback_srcs:
                if os.path.exists(fallback_src):
                    try:
                        img = Image.open(fallback_src)
                        img.thumbnail((600, 600))
                        img.save(dest_path, "WEBP", quality=80)
                        print(f"Fallback product {fallback_src} -> {dest_path}")
                        found = True
                        break
                    except Exception as e:
                        print(f"Error saving fallback for {dest_name}: {e}")
            if not found:
                print(f"Source and fallback not found for {dest_name}")


def copy_svgs():
    import shutil
    svg_dir = "YALA/SVG"
    if os.path.exists(svg_dir):
        for f in os.listdir(svg_dir):
            if f.endswith(".svg"):
                shutil.copy(os.path.join(svg_dir, f), os.path.join("assets/icons", f))
        print("Copied SVG icons to assets/icons/")

if __name__ == "__main__":
    setup_directories()
    optimize_hero_images()
    extract_video_frames()
    process_product_catalog_images()
    copy_svgs()
    print("Asset optimization complete.")
