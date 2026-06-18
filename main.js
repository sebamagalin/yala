// YALA CANDLES - Luxury E-Commerce Application Core JS
// Frameworks: GSAP & GSAP ScrollTrigger (via CDN)

// --- 1. Product Database ---
const PRODUCTS = [
  {
    id: 1,
    category: "egg",
    categoryKey: "cat_egg",
    title: "YALA Egg-Shaped Candle",
    titleKey: "prod_egg_title",
    aroma: "eucalyptus",
    aromaKey: "aroma_eucalyptus",
    aromaNameEN: "Lemon Eucalyptus",
    aromaNameES: "Eucalipto Limón",
    price: 35.00,
    image: "assets/images/egg_lemon_eucalyptus.webp",
    color: "#dce9be",
    descKey: "prod1_desc",
    descEN: "A stimulating citrus blend of crushed eucalyptus leaves, fresh lemongrass, and herbal verbena. Formulated to clarify thoughts and invite active energy.",
    descES: "Una mezcla cítrica y estimulante de hojas de eucalipto trituradas, hierbalimón fresco y verbena. Formulado para aclarar la mente e invitar energía activa."
  },
  {
    id: 2,
    category: "egg",
    categoryKey: "cat_egg",
    title: "YALA Egg-Shaped Candle",
    titleKey: "prod_egg_title",
    aroma: "lavender",
    aromaKey: "aroma_lavender",
    aromaNameEN: "Lavender",
    aromaNameES: "Lavanda",
    price: 35.00,
    image: "assets/images/egg_lavender.webp",
    color: "#c6c2e3",
    descKey: "prod2_desc",
    descEN: "Soothing French lavender flowers infused with wild sage and a warm honey undertone. Ideal for evening wind-downs and promoting deep, restful sleep.",
    descES: "Flores calmantes de lavanda francesa infundidas con salvia silvestre y un tono cálido de miel. Ideal para la relajación nocturna y un sueño profundo."
  },
  {
    id: 3,
    category: "egg",
    categoryKey: "cat_egg",
    title: "YALA Egg-Shaped Candle",
    titleKey: "prod_egg_title",
    aroma: "vanilla",
    aromaKey: "aroma_vanilla",
    aromaNameEN: "Vanilla",
    aromaNameES: "Vainilla",
    price: 35.00,
    image: "assets/images/egg_vanilla.webp",
    color: "#fbf2db",
    descKey: "prod3_desc",
    descEN: "Rich Madagascar vanilla bean layered with warm amber resins and soft sandalwood. Creates a welcoming, grounded atmosphere of warmth and security.",
    descES: "Vaina de vainilla rica de Madagascar combinada con resinas de ámbar cálido y sándalo suave. Crea una atmósfera acogedora de calidez y seguridad."
  },
  {
    id: 4,
    category: "luxury",
    categoryKey: "cat_luxury",
    title: "YALA Luxury Candle",
    titleKey: "prod_luxury_title",
    aroma: "verbena",
    aromaKey: "aroma_verbena",
    aromaNameEN: "Lemon Verbena",
    aromaNameES: "Verbena de Limón",
    price: 35.00,
    image: "assets/images/luxury_lemon_verbena.webp",
    color: "#e6efbb",
    descKey: "prod4_desc",
    descEN: "Zesty lemon verbena blossoms, green tea leaves, and a touch of white musk. An elegant, clean aroma that rejuvenates senses and brings crisp clarity.",
    descES: "Flores de verbena de limón, hojas de té verde y un toque de almizcle blanco. Un aroma elegante y limpio que rejuvenece los sentidos y aporta claridad."
  },
  {
    id: 5,
    category: "luxury",
    categoryKey: "cat_luxury",
    title: "YALA Luxury Candle",
    titleKey: "prod_luxury_title",
    aroma: "cinnamon",
    aromaKey: "aroma_cinnamon",
    aromaNameEN: "Orange Cinnamon",
    aromaNameES: "Naranja Canela",
    price: 35.00,
    image: "assets/images/luxury_orange_cinnamon.webp",
    color: "#f4cca0",
    descKey: "prod5_desc",
    descEN: "Sun-ripened sweet orange peel blended with ground Ceylon cinnamon and spicy clove. Evokes cozy fire-side memories, warming cold winter nights.",
    descES: "Cáscara de naranja dulce madurada al sol mezclada con canela de Ceilán molida y clavo. Evoca recuerdos acogedores junto a la chimenea en noches frías."
  },
  {
    id: 6,
    category: "luxury",
    categoryKey: "cat_luxury",
    title: "YALA Luxury Candle",
    titleKey: "prod_luxury_title",
    aroma: "spring",
    aromaKey: "aroma_spring",
    aromaNameEN: "Fresh Spring",
    aromaNameES: "Primavera Fresca",
    price: 35.00,
    image: "assets/images/luxury_fresh_spring.webp",
    color: "#cce5f0",
    descKey: "prod6_desc",
    descEN: "A crisp breath of morning dew, cut green grass, and white jasmine petals. Captures the essence of seasonal rebirth, breathing fresh air into spaces.",
    descES: "Un soplo crujiente de rocío matutino, hierba verde cortada y pétalos de jazmín blanco. Captura la esencia del renacimiento estacional en tus espacios."
  },
  {
    id: 7,
    category: "luxury",
    categoryKey: "cat_luxury",
    title: "YALA Luxury Candle",
    titleKey: "prod_luxury_title",
    aroma: "rose",
    aromaKey: "aroma_rose",
    aromaNameEN: "Rose Fruit Temptation",
    aromaNameES: "Tentación de Rosas y Frutos",
    price: 35.00,
    image: "assets/images/luxury_rose_fruit.webp",
    color: "#f6ced4",
    descKey: "prod7_desc",
    descEN: "Damask rose petals paired with tart red berries, pomegranate seeds, and a cedarwood base. A sophisticated, layered editorial aroma for deep connection.",
    descES: "Pétalos de rosa de Damasco combinados con bayas rojas ácidas, semillas de granada y base de cedro. Un aroma editorial y sofisticado para una conexión profunda."
  }
];

// --- 2. Translation Dictionary ---
const TRANSLATIONS = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_about: "About",
    nav_collection: "Collection",
    nav_gallery: "Gallery",
    nav_contact: "Contact",
    nav_bag: "Bag",
    // Hero
    hero_subtitle: "LUXURY HANDCRAFTED RITUALS",
    hero_title: "Illuminate Moments.<br><italic>Create Rituals.</italic>",
    hero_desc: "Handcrafted candles designed to transform everyday spaces into moments of calm, connection, and elevated wellbeing.",
    hero_cta_primary: "Explore Collection",
    hero_cta_secondary: "Our Story",
    hero_scroll: "Scroll to unveil",
    // Story
    story_tag: "OUR CRAFT",
    story_headline: "Where Nature Meets <italic>Sophisticated Rituals</italic>",
    story_p1: "Founded in Houston, Texas, YALA was born out of a desire to reintroduce rituals into daily routines. We believe that lighting a candle is not merely about scenting a room—it is an act of intention, a pause in a hectic world to reconnect with the self and nature.",
    story_p2: "Each YALA candle is meticulously handcrafted in small batches using 100% natural wax and clean-burning cotton wicks. Our scents are masterfully formulated with pure botanical extracts and organic essential oils, evoking the delicate complexity of raw earth, flowers, and spices.",
    stat_natural: "Natural Wax",
    stat_burn: "Average Burn",
    stat_synthetic: "Synthetics",
    // Benefits
    benefits_tag: "THE YALA ESSENCE",
    benefits_headline: "Formulated for <italic>Mindful Spaces</italic>",
    benefits_desc: "Inspired by the structure of natural crystals, our design and material choices represent raw beauty, durability, and luxury wellbeing.",
    benefit1_title: "Handcrafted",
    benefit1_desc: "Every candle is hand-poured in small batches, ensuring perfect oil dispersion and artistic finish.",
    benefit2_title: "Natural Fragrances",
    benefit2_desc: "Infused with pure botanical essential oils, free from phthalates, parabens, and synthetic additives.",
    benefit3_title: "Decorative Design",
    benefit3_desc: "Sculpted elegant geometries and premium glass domes that complement luxury interior aesthetics.",
    benefit4_title: "Long Lasting",
    benefit4_desc: "Our proprietary wax blend burns slower and cooler, extending aromatic diffusion for up to 45 hours.",
    // Featured
    featured_tag: "CURATED ARCHIVE",
    featured_headline: "The Signature <italic>Classics</italic>",
    featured_desc: "Explore our highly-coveted customer favorites, designed to set a profound sensory tone.",
    badge_bestseller: "Best Seller",
    badge_new: "New Aroma",
    cat_luxury: "Luxury Candle",
    cat_egg: "Egg-Shaped Candle",
    btn_view: "View Details",
    // Catalog
    catalog_tag: "COMPLETE FLORA",
    catalog_headline: "Browse the <italic>Sensory Archive</italic>",
    catalog_desc: "Filter by shape or primary aromatherapy oils to curate your custom personal atmosphere.",
    filter_shape: "Category:",
    filter_aroma: "Aroma Oil:",
    filter_all: "All",
    filter_cat_egg: "Egg-Shaped",
    filter_cat_luxury: "Luxury",
    // Aromas
    aroma_eucalyptus: "Lemon Eucalyptus",
    aroma_lavender: "Lavender",
    aroma_vanilla: "Vanilla",
    aroma_verbena: "Lemon Verbena",
    aroma_cinnamon: "Orange Cinnamon",
    aroma_spring: "Fresh Spring",
    aroma_rose: "Rose Fruit Temptation",
    // Ritual Step
    ritual_tag: "SENSORY SEQUENCE",
    ritual_headline: "A Ritual of <italic>Light and Scent</italic>",
    ritual_desc: "An editorial walkthrough detailing the steps to fully appreciate your handcrafted candle.",
    step1: "Step 01",
    step1_title: "The Glass Dome",
    step1_desc: "Our custom-fit glass domes keep the candle clean, lock in the aromatherapy botanicals, and form an architectural center-piece.",
    step2: "Step 02",
    step2_title: "Unveiling Senses",
    step2_desc: "Lift the dome slowly. Let the accumulated concentration of cold-throw pure essential oils fill the surrounding space immediately.",
    step3: "Step 03",
    step3_title: "The Ignition",
    step3_desc: "Ignite the cotton wick with a wooden match. Observe the orange spark and hear the gentle flame establish itself.",
    step4: "Step 04",
    step4_title: "Thermal Diffusion",
    step4_desc: "As the soy wax pool warms and melts, natural scent particles evaporate, generating a persistent atmosphere of relaxation.",
    step5: "Step 05",
    step5_title: "Mindful Pause",
    step5_desc: "Sit back, breathe deeply, and allow the gentle aromatherapy formulations to guide your thoughts to calm spaces.",
    // Instagram
    ig_tag: "INSTAGRAM STORIES",
    ig_desc: "Follow our daily ritual logs and aesthetic releases. Share your moments using the hashtag #YALAlife.",
    ig_button: "View Profile",
    // FAQ
    faq_tag: "COMMON QUESTIONS",
    faq_headline: "Frequently Asked <italic>Details</italic>",
    faq_desc: "Answers about shipping, aromatic compositions, ingredients, and gifting policies.",
    faq1_q: "Do you ship outside Houston, Texas?",
    faq1_a: "Yes. While we are proudly rooted in Houston, Texas, we offer nationwide shipping across the United States. Local delivery is available for orders in the Greater Houston Area.",
    faq2_q: "What materials are used in YALA candles?",
    faq2_a: "We use a premium blend of 100% natural soy and organic beeswax, lead-free cotton wicks, and pure botanical essential oils. We never use synthetic colorants, paraffin, phthalates, or parabens.",
    faq3_q: "How does ordering via WhatsApp work?",
    faq3_a: "To keep our service personal, adding items to your Bag compiles your request. Clicking checkout builds a custom text message describing your order. Sending this message to our WhatsApp team lets us confirm shipping, payment details, and gift packaging options directly.",
    faq4_q: "Do you offer custom bulk orders for events or corporate gifts?",
    faq4_a: "Yes! For orders above 10 units, we offer bulk discount rates and custom design wrapping. You can initiate this by clicking the 'Bulk Order' option in your Bag or completing the bulk inquiry form at the bottom of the page.",
    faq5_q: "How can I extend the lifespan of my candle?",
    faq5_a: "On the first burn, allow the wax pool to melt completely to the edges of the glass (about 2-3 hours) to prevent tunneling. Always trim the wick to 1/4 inch before relighting. Use the provided glass dome when the candle is cool to protect the scent.",
    // Contact
    contact_tag: "GET IN TOUCH",
    contact_headline: "Let Us Craft Your <italic>Sensory Space</italic>",
    contact_desc: "Have questions about our aromatherapeutic benefits, looking for local pick-ups in Houston, or designing custom event packages? Reach out to our artisans.",
    contact_whatsapp_label: "WhatsApp orders",
    contact_form_title: "Send a Message",
    form_name: "Full Name",
    form_email: "Email Address",
    form_phone: "Phone Number",
    form_message: "Your Inquiry",
    form_submit: "Send Message",
    // Footer
    footer_brand_desc: "Handcrafted decorative and aromatherapy candles designed to invite tranquility, aesthetic beauty, and luxury rituals into your spaces.",
    footer_col_nav: "Navigate",
    footer_col_collection: "Collection",
    footer_col_legal: "Origin",
    footer_location: "Designed and hand-poured in Houston, Texas.<br><br>For local pickups or specialized event packaging, reach out directly via WhatsApp.",
    footer_crafted: "Crafted with intention in Texas",
    footer_bulk_link: "Bulk Orders Inquiry",
    // Bag / Modal / Details
    bag_title: "Your Bag",
    bag_total: "Subtotal",
    bag_checkout: "Order via WhatsApp",
    bag_bulk_inquiry_btn: "Request Bulk Quote",
    bag_bulk_alert: "<strong>Bulk order detected (>10 units)!</strong> You qualify for wholesale pricing and customized gifting boxes. Please request a bulk quote.",
    btn_add_bag: "Add to Bag",
    qty: "Quantity",
    bulk_title: "Bulk Gifting Request",
    bulk_desc: "For custom artisan events, weddings, corporate packages, or orders exceeding 10 units. We offer bespoke wrapping and volume discounts.",
    form_est_qty: "Estimated Quantity",
    form_aromas: "Preferred Aromas",
    form_custom_needs: "Custom Requirements",
    form_submit_inquiry: "Submit Gifting Request",
    prod_egg_title: "YALA Egg-Shaped Candle",
    prod_luxury_title: "YALA Luxury Candle",
    prod1_desc: "A stimulating citrus blend of crushed eucalyptus leaves, fresh lemongrass, and herbal verbena. Formulado para clarificar la mente.",
    prod2_desc: "Soothing French lavender flowers infused with wild sage and honey. Ideal for evening wind-downs.",
    prod3_desc: "Rich Madagascar vanilla bean layered with warm amber resins and sandalwood. Creates a welcoming warm atmosphere.",
    prod4_desc: "Zesty lemon verbena blossoms, green tea leaves, and a touch of white musk. Elegant, clean and crisp.",
    prod5_desc: "Sun-ripened sweet orange peel blended with ground Ceylon cinnamon and clove. Cozy fire-side memories.",
    prod6_desc: "A crisp breath of morning dew, cut green grass, and jasmine. Captures seasonal rebirth.",
    prod7_desc: "Damask rose petals paired with tart red berries, pomegranate seeds, and cedarwood. Sophisticated and layered."
  },
  es: {
    // Navigation
    nav_home: "Inicio",
    nav_about: "Nosotros",
    nav_collection: "Colección",
    nav_gallery: "Galería",
    nav_contact: "Contacto",
    nav_bag: "Bolsa",
    // Hero
    hero_subtitle: "RITUALES DE LUJO HECHOS A MANO",
    hero_title: "Ilumina Momentos.<br><italic>Crea Rituales.</italic>",
    hero_desc: "Velas artesanales diseñadas para transformar tus espacios cotidianos en momentos de calma, conexión y bienestar.",
    hero_cta_primary: "Explorar Colección",
    hero_cta_secondary: "Nuestra Historia",
    hero_scroll: "Desliza para revelar",
    // Story
    story_tag: "NUESTRO OFICIO",
    story_headline: "Donde la Naturaleza Encuentra <italic>Rituales Sofisticados</italic>",
    story_p1: "Fundada en Houston, Texas, YALA nació del deseo de reintroducir rituales en nuestras rutinas. Creemos que encender una vela no es solo perfumar una habitación: es un acto de intención, una pausa para reconectarse con uno mismo.",
    story_p2: "Cada vela YALA es vertida a mano meticulosamente en pequeños lotes utilizando cera 100% natural y pabilos de algodón de combustión limpia. Nuestros aromas son formulados con extractos botánicos puros y aceites esenciales.",
    stat_natural: "Cera Natural",
    stat_burn: "Quemado Promedio",
    stat_synthetic: "Sintéticos",
    // Benefits
    benefits_tag: "LA ESENCIA YALA",
    benefits_headline: "Formulado para <italic>Espacios Conscientes</italic>",
    benefits_desc: "Inspirado en la estructura de los cristales naturales, nuestras elecciones representan belleza pura, durabilidad y bienestar.",
    benefit1_title: "Hecho a Mano",
    benefit1_desc: "Cada vela se vierte a mano en lotes pequeños, garantizando una perfecta dispersión del aroma y un acabado artístico.",
    benefit2_title: "Aromas Naturales",
    benefit2_desc: "Infundido con aceites esenciales botánicos puros, libre de ftalatos, parabenos y aditivos sintéticos.",
    benefit3_title: "Diseño Decorativo",
    benefit3_desc: "Geometrías elegantes esculpidas y cúpulas de vidrio premium que complementan la estética de interiores de lujo.",
    benefit4_title: "Larga Duración",
    benefit4_desc: "Nuestra mezcla de cera patentada se quema más lento y a menor temperatura, extendiendo la difusión hasta 45 horas.",
    // Featured
    featured_tag: "ARCHIVO CURADO",
    featured_headline: "Los Clásicos <italic>Distintivos</italic>",
    featured_desc: "Explore los favoritos de nuestros clientes, diseñados para establecer un tono sensorial profundo.",
    badge_bestseller: "Más Vendido",
    badge_new: "Nuevo Aroma",
    cat_luxury: "Vela de Lujo",
    cat_egg: "Vela Tipo Huevo",
    btn_view: "Ver Detalles",
    // Catalog
    catalog_tag: "FLORA COMPLETA",
    catalog_headline: "Explore el <italic>Archivo Sensorial</italic>",
    catalog_desc: "Filtre por forma o aceites de aromaterapia para diseñar su atmósfera personal personalizada.",
    filter_shape: "Categoría:",
    filter_aroma: "Aceites:",
    filter_all: "Todos",
    filter_cat_egg: "Forma Huevo",
    filter_cat_luxury: "Vela Lujo",
    // Aromas
    aroma_eucalyptus: "Eucalipto Limón",
    aroma_lavender: "Lavanda",
    aroma_vanilla: "Vainilla",
    aroma_verbena: "Verbena de Limón",
    aroma_cinnamon: "Naranja Canela",
    aroma_spring: "Primavera Fresca",
    aroma_rose: "Tentación Rosas",
    // Ritual Step
    ritual_tag: "SECUENCIA SENSORIAL",
    ritual_headline: "Un Ritual de <italic>Luz y Aroma</italic>",
    ritual_desc: "Una guía editorial que detalla los pasos para apreciar plenamente su vela artesanal.",
    step1: "Paso 01",
    step1_title: "La Cúpula de Vidrio",
    step1_desc: "Nuestras cúpulas de vidrio personalizadas protegen la vela, encierran los aceites esenciales y forman una pieza central.",
    step2: "Paso 02",
    step2_title: "Revelando Sentidos",
    step2_desc: "Levante la cúpula lentamente. Deje que la concentración de aceites de la primera fragancia llene el espacio de inmediato.",
    step3: "Paso 03",
    step3_title: "El Encendido",
    step3_desc: "Encienda el pabilo de algodón con un fósforo de madera. Observe la chispa y escuche la llama establecerse.",
    step4: "Paso 04",
    step4_title: "Difusión Térmica",
    step4_desc: "A medida que la piscina de cera se calienta y se derrite, los aceites se evaporan creando una atmósfera persistente.",
    step5: "Paso 05",
    step5_title: "Pausa Consciente",
    step5_desc: "Siéntese, respire hondo y permita que las formulaciones naturales guíen sus pensamientos hacia la calma.",
    // Instagram
    ig_tag: "HISTORIAS DE INSTAGRAM",
    ig_desc: "Siga nuestros registros diarios y lanzamientos estéticos. Comparta sus momentos usando #YALAlife.",
    ig_button: "Ver Perfil",
    // FAQ
    faq_tag: "PREGUNTAS COMUNES",
    faq_headline: "Detalles <italic>Frecuentes</italic>",
    faq_desc: "Respuestas sobre envíos, composiciones aromáticas, ingredientes y políticas de regalo.",
    faq1_q: "¿Hacen envíos fuera de Houston, Texas?",
    faq1_a: "Sí. Aunque estamos orgullosamente basados en Houston, Texas, realizamos envíos a todo el país (EE. UU.). Entrega local disponible para Houston.",
    faq2_q: "¿Qué materiales se utilizan en las velas YALA?",
    faq2_a: "Utilizamos cera natural de soja y cera de abejas orgánica, pabilos de algodón sin plomo y aceites esenciales botánicos puros. No usamos parafinas ni sintéticos.",
    faq3_q: "¿Cómo funciona el pedido por WhatsApp?",
    faq3_a: "Para un servicio personalizado, agregar productos a la bolsa arma su pedido. El checkout genera un mensaje de texto preformateado que nos envía a WhatsApp para coordinar pago y entrega.",
    faq4_q: "¿Ofrecen pedidos al por mayor para eventos o regalos corporativos?",
    faq4_a: "¡Sí! Para pedidos superiores a 10 unidades, ofrecemos tarifas con descuento mayorista y envoltura personalizada. Inícielo en el formulario de compras al por mayor.",
    faq5_q: "¿Cómo puedo prolongar la duración de mi vela?",
    faq5_a: "En el primer encendido, deje que la cera se derrita hasta los bordes (2-3 horas). Recorte el pabilo a 6mm antes de encender. Use la cúpula cuando esté fría.",
    // Contact
    contact_tag: "CONTACTO",
    contact_headline: "Permítanos Diseñar su <italic>Espacio Sensorial</italic>",
    contact_desc: "¿Tiene preguntas sobre nuestros beneficios, busca retiros locales en Houston o empaques personalizados? Escríbanos.",
    contact_whatsapp_label: "Pedidos WhatsApp",
    contact_form_title: "Enviar un Mensaje",
    form_name: "Nombre Completo",
    form_email: "Correo Electrónico",
    form_phone: "Número de Teléfono",
    form_message: "Su Mensaje",
    form_submit: "Enviar Mensaje",
    // Footer
    footer_brand_desc: "Velas decorativas y de aromaterapia hechas a mano diseñadas para invitar la tranquilidad, la belleza y los rituales a sus espacios.",
    footer_col_nav: "Navegación",
    footer_col_collection: "Colección",
    footer_col_legal: "Origen",
    footer_location: "Diseñado y vertido a mano en Houston, Texas.<br><br>Para retiros locales o empaques de regalo especiales, contáctenos directamente por WhatsApp.",
    footer_crafted: "Creado con intención en Texas",
    footer_bulk_link: "Consultas por Mayor",
    // Bag / Modal / Details
    bag_title: "Su Bolsa",
    bag_total: "Subtotal",
    bag_checkout: "Pedir por WhatsApp",
    bag_bulk_inquiry_btn: "Solicitar Cotización",
    bag_bulk_alert: "<strong>¡Pedido mayorista detectado (>10 unidades)!</strong> Califica para precios especiales y cajas personalizadas. Por favor solicite cotización.",
    btn_add_bag: "Agregar a la Bolsa",
    qty: "Cantidad",
    bulk_title: "Solicitud de Regalos por Mayor",
    bulk_desc: "Para bodas, eventos corporativos o compras de más de 10 unidades. Ofrecemos etiquetas personalizadas y descuentos.",
    form_est_qty: "Cantidad Estimada",
    form_aromas: "Aromas Preferidos",
    form_custom_needs: "Requisitos Especiales",
    form_submit_inquiry: "Enviar Solicitud",
    prod_egg_title: "Vela YALA Tipo Huevo",
    prod_luxury_title: "Vela de Lujo YALA",
    prod1_desc: "Una mezcla cítrica y estimulante de eucalipto, hierbalimón fresco y verbena. Aclara los pensamientos.",
    prod2_desc: "Flores calmantes de lavanda francesa infundidas con salvia silvestre y miel. Ideal para relajar por la noche.",
    prod3_desc: "Rica vainilla de Madagascar con resinas de ámbar cálido y sándalo. Brinda calidez y seguridad.",
    prod4_desc: "Flores de verbena de limón, té verde y almizcle blanco. Un aroma elegante, limpio y rejuvenecedor.",
    prod5_desc: "Cáscara de naranja dulce mezclada con canela de Ceilán molida y clavo. Momentos cálidos en el hogar.",
    prod6_desc: "Un soplo crujiente de rocío matutino, hierba verde y jazmín. Captura la renovación de la naturaleza.",
    prod7_desc: "Pétalos de rosa de Damasco con bayas rojas, granada y base de cedro. Sofisticado, editorial y profundo."
  }
};

let currentLang = "en";

// --- 3. App State ---
let bag = [];
let activeFilters = {
  category: "all",
  aroma: "all"
};

// Local storage helpers
function loadBagFromStorage() {
  const stored = localStorage.getItem("yala_bag");
  if (stored) {
    try {
      bag = JSON.parse(stored);
      updateBagUI();
    } catch (e) {
      bag = [];
    }
  }
}

function saveBagToStorage() {
  localStorage.setItem("yala_bag", JSON.stringify(bag));
}

// --- 4. Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  // Initialize elements
  setupLanguage();
  setupCursor();
  setupHeader();
  setupHeroScrollSequence();
  setupCatalog();
  setupDetailsModal();
  setupBagSidebar();
  setupBulkModal();
  setupFaqAccordion();
  setupStandardScrollReveals();
  loadBagFromStorage();
  
  // Connect contact form
  document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert(currentLang === "en" ? "Thank you for reaching out! Our artisans will contact you shortly." : "¡Gracias por contactarnos! Nuestros artesanos se comunicarán con usted a la brevedad.");
    e.target.reset();
  });
});

// --- 5. Language System ---
function setupLanguage() {
  const enBtns = [document.getElementById("lang-en"), document.getElementById("mobile-lang-en")];
  const esBtns = [document.getElementById("lang-es"), document.getElementById("mobile-lang-es")];
  
  function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    
    // Update active classes
    [...enBtns, ...esBtns].forEach(btn => btn.classList.remove("active"));
    if (lang === "en") {
      enBtns.forEach(btn => btn.classList.add("active"));
    } else {
      esBtns.forEach(btn => btn.classList.add("active"));
    }
    
    // Update translation targets
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (TRANSLATIONS[lang][key]) {
        el.innerHTML = TRANSLATIONS[lang][key];
      }
    });
    
    // Update placeholders
    const nameInput = document.getElementById("contact-name");
    const emailInput = document.getElementById("contact-email");
    const msgInput = document.getElementById("contact-message");
    if (nameInput) nameInput.placeholder = lang === "en" ? "Aria Vance" : "Aria Vance";
    if (emailInput) emailInput.placeholder = lang === "en" ? "aria@example.com" : "aria@correo.com";
    if (msgInput) msgInput.placeholder = lang === "en" ? "Tell us about the atmosphere you want to create..." : "Cuéntenos sobre la atmósfera que desea crear...";
    
    // Refresh catalog and bag layout to apply translation keys
    renderCatalog();
    updateBagUI();
  }

  enBtns.forEach(btn => btn.addEventListener("click", () => setLanguage("en")));
  esBtns.forEach(btn => btn.addEventListener("click", () => setLanguage("es")));
  
  // Set default language
  setLanguage("en");
}

// --- 6. Custom Cursor (Luxury Micro-interactions) ---
function setupCursor() {
  const cursor = document.getElementById("customCursor");
  const dot = document.getElementById("customCursorDot");
  
  if (!cursor) return;

  document.addEventListener("mousemove", (e) => {
    // Soft trailing effect via GSAP
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.4,
      ease: "power2.out"
    });
    
    gsap.to(dot, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.05
    });
  });

  // Grow cursor on interactive hover
  document.querySelectorAll(".clickable, a, button, select, input, textarea").forEach(el => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("cursor-hover");
    });
    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("cursor-hover");
    });
  });
  
  // Set cursor click effect
  document.addEventListener("mousedown", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(0.85)";
  });
  document.addEventListener("mouseup", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
  });
}

// --- 7. Header and Mobile Menu Drawer ---
function setupHeader() {
  const header = document.getElementById("mainHeader");
  const menuToggle = document.getElementById("menuToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");
  
  // Sticky header class swap
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  });

  // Toggle mobile nav drawer
  menuToggle.addEventListener("click", () => {
    const isActive = mobileDrawer.classList.toggle("active");
    menuToggle.classList.toggle("active");
    if (isActive) {
      // Animate lines to an X
      menuToggle.querySelectorAll("span")[0].style.transform = "rotate(45deg) translate(5px, 5px)";
      menuToggle.querySelectorAll("span")[1].style.opacity = "0";
      menuToggle.querySelectorAll("span")[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
      document.body.style.overflow = "hidden"; // Lock scroll
    } else {
      menuToggle.querySelectorAll("span")[0].style.transform = "none";
      menuToggle.querySelectorAll("span")[1].style.opacity = "1";
      menuToggle.querySelectorAll("span")[2].style.transform = "none";
      document.body.style.overflow = "";
    }
  });

  // Close drawer on click of nav link
  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileDrawer.classList.remove("active");
      menuToggle.classList.remove("active");
      menuToggle.querySelectorAll("span")[0].style.transform = "none";
      menuToggle.querySelectorAll("span")[1].style.opacity = "1";
      menuToggle.querySelectorAll("span")[2].style.transform = "none";
      document.body.style.overflow = "";
    });
  });
  
  // Handle click filter in footer navigation links
  document.querySelectorAll(".clickableFilter").forEach(el => {
    el.addEventListener("click", (e) => {
      const val = el.getAttribute("data-filter-val");
      const categoryFilterBtns = document.querySelectorAll("[data-filter-type='category']");
      categoryFilterBtns.forEach(btn => {
        if (btn.getAttribute("data-filter-val") === val) {
          btn.click();
        }
      });
    });
  });
}

// --- 8. GSAP ScrollTrigger Hero Sequence (The Ritual) ---
function setupHeroScrollSequence() {
  gsap.registerPlugin(ScrollTrigger);
  
  // Pinned container sequence
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#home",
      start: "top top",
      end: "+=2200", // Length of scrollport drive
      scrub: true,
      pin: true,
      anticipatePin: 1
    }
  });

  // Crossfade opacity sequence of the 5 JPEGs (optimized WebP)
  // Scroll 0-25%: Frame 1 (Dome covered) -> Frame 2 (Dome lifting)
  tl.to("#frame1", { opacity: 0, ease: "none" })
    .to("#frame2", { opacity: 1, ease: "none" }, "<")
    
    // Scroll 25-50%: Frame 2 -> Frame 3 (Dome gone)
    .to("#frame2", { opacity: 0, ease: "none" })
    .to("#frame3", { opacity: 1, ease: "none" }, "<")
    
    // Scroll 50-75%: Frame 3 -> Frame 4 (Hand lights wick)
    .to("#frame3", { opacity: 0, ease: "none" })
    .to("#frame4", { opacity: 1, ease: "none" }, "<")
    
    // Scroll 75-100%: Frame 4 -> Frame 5 (Lit candle, hand removed)
    .to("#frame4", { opacity: 0, ease: "none" })
    .to("#frame5", { opacity: 1, ease: "none" }, "<");
    
  // Parallax fade effect on the overlay card card
  gsap.to(".hero-card", {
    scrollTrigger: {
      trigger: "#home",
      start: "top top",
      end: "+=1500",
      scrub: true
    },
    y: -80,
    opacity: 0.1,
    ease: "power1.inOut"
  });
}

// --- 9. Catalog Filters & Grid ---
function setupCatalog() {
  const grid = document.getElementById("catalogGrid");
  const filterBtns = document.querySelectorAll(".filter-btn");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const type = btn.getAttribute("data-filter-type");
      const val = btn.getAttribute("data-filter-val");
      
      // Update active class within its own filter row
      document.querySelectorAll(`[data-filter-type="${type}"]`).forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      // Update state
      activeFilters[type] = val;
      
      // Re-filter with a nice GSAP animation
      gsap.to(grid, {
        opacity: 0,
        y: 10,
        duration: 0.25,
        onComplete: () => {
          renderCatalog();
          gsap.to(grid, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            clearProps: "all"
          });
        }
      });
    });
  });
}

function renderCatalog() {
  const grid = document.getElementById("catalogGrid");
  if (!grid) return;
  
  grid.innerHTML = "";
  
  // Filter products matching both category and aroma selections
  const filtered = PRODUCTS.filter(p => {
    const catMatch = activeFilters.category === "all" || p.category === activeFilters.category;
    const aromaMatch = activeFilters.aroma === "all" || p.aroma === activeFilters.aroma;
    return catMatch && aromaMatch;
  });
  
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; padding: 60px 0; text-align: center; opacity: 0.5;">
        <p>${currentLang === 'en' ? 'No candles match your selected filters.' : 'No hay velas que coincidan con los filtros seleccionados.'}</p>
      </div>
    `;
    return;
  }
  
  filtered.forEach(p => {
    const card = document.createElement("article");
    card.className = "product-card clickable";
    
    const catName = currentLang === "en" ? (p.category === "egg" ? "Egg-Shaped Candle" : "Luxury Candle") : (p.category === "egg" ? "Vela Tipo Huevo" : "Vela de Lujo");
    const aromaName = currentLang === "en" ? p.aromaNameEN : p.aromaNameES;
    const btnText = currentLang === "en" ? "View Details" : "Ver Detalles";
    
    card.innerHTML = `
      <div class="product-img-wrap">
        <img src="${p.image}" alt="${p.title} - ${aromaName}" class="product-card-img" loading="lazy">
      </div>
      <div class="product-card-info">
        <span class="product-card-category">${catName}</span>
        <h3 class="product-card-title">${currentLang === 'en' ? p.title : TRANSLATIONS.es[p.titleKey]}</h3>
        <div class="product-card-aroma">
          <span class="aroma-dot" style="background-color: ${p.color};"></span>
          <span>${aromaName}</span>
        </div>
        <div class="product-card-footer">
          <span class="product-card-price">$${p.price.toFixed(2)}</span>
          <button class="product-card-cta clickable open-details-btn" data-product="${p.id}">${btnText}</button>
        </div>
      </div>
    `;
    
    // Bind modal click
    card.querySelector(".open-details-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      openDetailsModal(p.id);
    });
    card.addEventListener("click", () => {
      openDetailsModal(p.id);
    });
    
    grid.appendChild(card);
  });
  
  // Re-hook cursor events for newly created cards
  setupCursor();
}

// --- 10. Product Details Modal ---
let activeProductId = null;
let currentQuantity = 1;

function setupDetailsModal() {
  const overlay = document.getElementById("detailsModalOverlay");
  const closeBtn = document.getElementById("closeDetailsModalBtn");
  const minusBtn = document.getElementById("modalQtyMinus");
  const plusBtn = document.getElementById("modalQtyPlus");
  const qtyVal = document.getElementById("modalQtyVal");
  const addBtn = document.getElementById("modalAddToBagBtn");

  closeBtn.addEventListener("click", closeDetailsModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeDetailsModal();
  });

  minusBtn.addEventListener("click", () => {
    if (currentQuantity > 1) {
      currentQuantity--;
      qtyVal.textContent = currentQuantity;
    }
  });

  plusBtn.addEventListener("click", () => {
    currentQuantity++;
    qtyVal.textContent = currentQuantity;
  });

  addBtn.addEventListener("click", () => {
    if (activeProductId !== null) {
      addToBag(activeProductId, currentQuantity);
      closeDetailsModal();
      openBagSidebar();
    }
  });
}

function openDetailsModal(prodId) {
  const p = PRODUCTS.find(prod => prod.id === prodId);
  if (!p) return;

  activeProductId = prodId;
  currentQuantity = 1;
  
  const overlay = document.getElementById("detailsModalOverlay");
  const img = document.getElementById("modalProductImg");
  const cat = document.getElementById("modalProductCategory");
  const title = document.getElementById("modalProductTitle");
  const dot = document.getElementById("modalProductAromaDot");
  const aromaText = document.getElementById("modalProductAromaText");
  const price = document.getElementById("modalProductPrice");
  const desc = document.getElementById("modalProductDesc");
  const qtyVal = document.getElementById("modalQtyVal");

  // Load product fields
  img.src = p.image;
  img.alt = p.title;
  cat.textContent = currentLang === "en" ? (p.category === "egg" ? "Egg-Shaped Candle" : "Luxury Candle") : (p.category === "egg" ? "Vela Tipo Huevo" : "Vela de Lujo");
  title.textContent = currentLang === "en" ? p.title : TRANSLATIONS.es[p.titleKey];
  dot.style.backgroundColor = p.color;
  aromaText.textContent = currentLang === "en" ? p.aromaNameEN : p.aromaNameES;
  price.textContent = `$${p.price.toFixed(2)}`;
  desc.textContent = currentLang === "en" ? p.descEN : p.descES;
  qtyVal.textContent = currentQuantity;

  // Open modal
  overlay.classList.add("active");
  document.body.style.overflow = "hidden"; // lock page scroll
}

function closeDetailsModal() {
  document.getElementById("detailsModalOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

// --- 11. WhatsApp Checkout Bag / Cart Logic ---
function setupBagSidebar() {
  const sidebar = document.getElementById("bagSidebar");
  const toggleBtn = document.getElementById("toggleBagBtn");
  const closeBtn = document.getElementById("closeBagBtn");
  const checkoutBtn = document.getElementById("bagCheckoutBtn");
  const bulkInquiryBtn = document.getElementById("bagBulkInquiryBtn");

  toggleBtn.addEventListener("click", openBagSidebar);
  closeBtn.addEventListener("click", closeBagSidebar);
  
  checkoutBtn.addEventListener("click", () => {
    const totalQty = bag.reduce((sum, item) => sum + item.quantity, 0);
    if (totalQty > 10) {
      // Redirect above 10 units to Bulk Form
      closeBagSidebar();
      openBulkModal();
    } else {
      checkoutViaWhatsApp();
    }
  });

  bulkInquiryBtn.addEventListener("click", () => {
    closeBagSidebar();
    openBulkModal();
  });
}

function openBagSidebar() {
  document.getElementById("bagSidebar").classList.add("active");
}

function closeBagSidebar() {
  document.getElementById("bagSidebar").classList.remove("active");
}

function addToBag(prodId, qty) {
  const existing = bag.find(item => item.id === prodId);
  if (existing) {
    existing.quantity += qty;
  } else {
    bag.push({ id: prodId, quantity: qty });
  }
  saveBagToStorage();
  updateBagUI();
}

function removeFromBag(prodId) {
  bag = bag.filter(item => item.id !== prodId);
  saveBagToStorage();
  updateBagUI();
}

function updateBagUI() {
  const list = document.getElementById("bagItemsList");
  const countBadge = document.getElementById("bagCount");
  const subtotalEl = document.getElementById("bagSubtotal");
  const bulkAlert = document.getElementById("bagBulkAlert");
  const checkoutBtn = document.getElementById("bagCheckoutBtn");
  const bulkInquiryBtn = document.getElementById("bagBulkInquiryBtn");

  if (!list) return;

  list.innerHTML = "";
  let totalCount = 0;
  let subtotal = 0;

  if (bag.length === 0) {
    list.innerHTML = `<p class="bag-empty-text">${currentLang === 'en' ? 'Your Bag is empty.' : 'Su Bolsa está vacía.'}</p>`;
    checkoutBtn.style.display = "block";
    checkoutBtn.disabled = true;
    bulkInquiryBtn.style.display = "none";
    bulkAlert.style.display = "none";
  } else {
    checkoutBtn.disabled = false;
    bag.forEach(item => {
      const p = PRODUCTS.find(prod => prod.id === item.id);
      if (!p) return;

      totalCount += item.quantity;
      const itemSubtotal = p.price * item.quantity;
      subtotal += itemSubtotal;

      const itemCard = document.createElement("div");
      itemCard.className = "bag-item";
      
      const aromaName = currentLang === "en" ? p.aromaNameEN : p.aromaNameES;
      const removeText = currentLang === "en" ? "Remove" : "Eliminar";
      const itemTitle = currentLang === "en" ? p.title : TRANSLATIONS.es[p.titleKey];
      
      itemCard.innerHTML = `
        <img src="${p.image}" alt="${p.title}" class="bag-item-img">
        <div class="bag-item-details">
          <h4 class="bag-item-title">${itemTitle}</h4>
          <span class="bag-item-aroma">${aromaName}</span>
          <div class="bag-item-bottom">
            <span class="bag-item-qty">Qty: ${item.quantity}</span>
            <span class="bag-item-price">$${itemSubtotal.toFixed(2)}</span>
            <button class="bag-item-remove clickable" data-id="${p.id}">${removeText}</button>
          </div>
        </div>
      `;

      itemCard.querySelector(".bag-item-remove").addEventListener("click", () => {
        removeFromBag(p.id);
      });

      list.appendChild(itemCard);
    });
  }

  // Tally and conditional bulk order UI toggles
  countBadge.textContent = totalCount;
  subtotalEl.textContent = `$${subtotal.toFixed(2)}`;

  if (totalCount > 10) {
    bulkAlert.style.display = "block";
    checkoutBtn.style.display = "none"; // Hide direct whatsapp checkout
    bulkInquiryBtn.style.display = "block"; // Show bulk inquiry button
  } else {
    bulkAlert.style.display = "none";
    checkoutBtn.style.display = "block";
    checkoutBtn.textContent = currentLang === "en" ? "Order via WhatsApp" : "Pedir por WhatsApp";
    bulkInquiryBtn.style.display = "none";
  }
}

// Generate the custom encoded WhatsApp ordering message
function checkoutViaWhatsApp() {
  if (bag.length === 0) return;

  let message = currentLang === "en" 
    ? "Hello, I would like to order:\n\n" 
    : "Hola, me gustaría realizar un pedido:\n\n";

  bag.forEach(item => {
    const p = PRODUCTS.find(prod => prod.id === item.id);
    if (p) {
      const aromaName = currentLang === "en" ? p.aromaNameEN : p.aromaNameES;
      const title = currentLang === "en" ? p.title : TRANSLATIONS.es[p.titleKey];
      
      message += `Product: ${title}\nAroma: ${aromaName}\nQuantity: ${item.quantity}\n\n`;
    }
  });

  const whatsappNumber = "13464020000"; // Target Number (+1 346 402-0000)
  const encodedText = encodeURIComponent(message.trim());
  const url = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
  
  window.open(url, "_blank");
}

// --- 12. Bulk Inquiry Form ---
function setupBulkModal() {
  const overlay = document.getElementById("bulkInquiryModalOverlay");
  const closeBtn = document.getElementById("closeInquiryModalBtn");
  const form = document.getElementById("bulkInquiryForm");

  closeBtn.addEventListener("click", closeBulkModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeBulkModal();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Extract values
    const name = document.getElementById("inquiry-name").value;
    const email = document.getElementById("inquiry-email").value;
    const phone = document.getElementById("inquiry-phone").value;
    const qty = document.getElementById("inquiry-qty").value;
    const aromas = document.getElementById("inquiry-aromas").value;
    const notes = document.getElementById("inquiry-notes").value;

    // Google Form submission simulator: we can submit using fetch to prefilled entries, or redirect.
    // Prefilled link: https://docs.google.com/forms/d/e/1FAIpQLSfD.../formResponse?entry.111=Name&entry.222=Email
    // Here we will log and simulate.
    console.log("Submitting bulk order inquiry:", { name, email, phone, qty, aromas, notes });
    
    alert(currentLang === "en" 
      ? "Thank you! Your bulk gifting inquiry has been registered. Our wholesale manager will contact you within 24 hours." 
      : "¡Gracias! Su solicitud de regalos por mayor ha sido registrada. Nuestro gerente de ventas se comunicará con usted en menos de 24 horas.");
    
    form.reset();
    closeBulkModal();
  });
}

function openBulkModal() {
  document.getElementById("bulkInquiryModalOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeBulkModal() {
  document.getElementById("bulkInquiryModalOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

// --- 13. FAQ Accordion ---
function setupFaqAccordion() {
  const items = document.querySelectorAll(".faq-item");

  items.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");
      
      // Close all other accordions
      items.forEach(other => {
        other.classList.remove("active");
        other.querySelector(".faq-question").setAttribute("aria-expanded", "false");
        other.querySelector(".faq-answer").style.maxHeight = "0";
      });

      if (!isOpen) {
        item.classList.add("active");
        question.setAttribute("aria-expanded", "true");
        // Animate height using scrollHeight
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        item.classList.remove("active");
        question.setAttribute("aria-expanded", "false");
        answer.style.maxHeight = "0";
      }
    });
  });
}

// --- 14. Standard GSAP Scroll reveals ---
function setupStandardScrollReveals() {
  gsap.registerPlugin(ScrollTrigger);

  // Fade + Blur Reveals
  document.querySelectorAll(".reveal-blur").forEach(el => {
    gsap.fromTo(el, 
      { filter: "blur(12px)", opacity: 0 },
      { 
        filter: "blur(0px)", 
        opacity: 1, 
        duration: 1.2, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );
  });

  // Fade reveals
  document.querySelectorAll(".reveal-fade").forEach(el => {
    gsap.fromTo(el, 
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: 1, 
        ease: "power1.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%"
        }
      }
    );
  });

  // Scale reveals (IG items)
  document.querySelectorAll(".reveal-scale").forEach(el => {
    gsap.fromTo(el, 
      { scale: 0.94, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 0.8, 
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: el,
          start: "top 90%"
        }
      }
    );
  });

  // Translate reveals
  document.querySelectorAll(".reveal-up").forEach(el => {
    gsap.fromTo(el, 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%"
        }
      }
    );
  });
}
