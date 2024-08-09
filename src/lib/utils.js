import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function translateCategory(category) {
  const translations = {
    beauty: "Belleza",
    fragrances: "Fragancias",
    furniture: "Muebles",
    groceries: "Comestibles",
    "home-decoration": "Decoración del hogar",
    "kitchen-accessories": "Accesorios de cocina",
    laptops: "Portátiles",
    "mens-shirts": "Camisas de hombre",
    "mens-shoes": "Zapatos de hombre",
    "mens-watches": "Relojes de hombre",
    "mobile-accessories": "Accesorios para móviles",
    motorcycle: "Motocicleta",
    "skin-care": "Cuidado de la piel",
    smartphones: "Teléfonos inteligentes",
    "sports-accessories": "Accesorios deportivos",
    sunglasses: "Gafas de sol",
    tablets: "Tabletas",
    tops: "Tops",
    vehicle: "Vehículo",
    "womens-bags": "Bolsos de mujer",
    "womens-dresses": "Vestidos de mujer",
    "womens-jewellery": "Joyería de mujer",
    "womens-shoes": "Zapatos de mujer",
    "womens-watches": "Relojes de mujer",
  };

  return translations[category];
}
