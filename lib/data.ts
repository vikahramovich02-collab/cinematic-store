export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: "jacket" | "trousers" | "shirt" | "outerwear" | "hoodie";
  collection: string;
  description: string;
  composition: string;
  sizes: string[];
  images: string[];
  badge?: string;
};

export type Capsule = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  occasion: string;
  image: string;
  productIds: string[];
};

export const products: Product[] = [
  {
    id: "1",
    slug: "pizhakon-oversayz-chernyy",
    name: "Пиджак оверсайз",
    price: 320,
    category: "jacket",
    collection: "LETO 2025",
    description:
      "Оверсайз пиджак с расширенными плечами и удлинённым силуэтом. Свободный крой позволяет создавать множество образов — от формального до уличного. Результат долгой работы над формой и пропорциями.",
    composition: "100% хлопок. Производство: Беларусь.",
    sizes: ["XS", "S", "M", "L", "XL"],
    images: ["/placeholders/jacket-1.jpg", "/placeholders/jacket-1b.jpg"],
    badge: "NEW",
  },
  {
    id: "2",
    slug: "bryuki-klassicheskie",
    name: "Брюки классические",
    price: 185,
    category: "trousers",
    collection: "LETO 2025",
    description:
      "Прямые брюки с высокой посадкой. Капсульная вещь — сочетается со всем ассортиментом бренда. Мягкая ткань с лёгкой фактурой.",
    composition: "72% вискоза, 28% полиэстер. Производство: Беларусь.",
    sizes: ["XS", "S", "M", "L", "XL"],
    images: ["/placeholders/trousers-1.jpg", "/placeholders/trousers-1b.jpg"],
  },
  {
    id: "3",
    slug: "rubashka-oversayz",
    name: "Рубашка оверсайз",
    price: 145,
    category: "shirt",
    collection: "LETO 2025",
    description:
      "Рубашка свободного кроя с классическим воротником. Носится навыпуск или заправленной. Идеальная базовая вещь для капсульного гардероба.",
    composition: "100% хлопок. Производство: Беларусь.",
    sizes: ["XS", "S", "M", "L", "XL"],
    images: ["/placeholders/shirt-1.jpg", "/placeholders/shirt-1b.jpg"],
    badge: "HIT",
  },
  {
    id: "4",
    slug: "kostyum-klassicheskiy",
    name: "Костюм двойка",
    price: 490,
    category: "jacket",
    collection: "WEDDING",
    description:
      "Классический костюм с пиджаком и брюками. Выверенный силуэт, идеален для свадьбы и торжественных мероприятий. Возможна индивидуальная примерка.",
    composition: "65% шерсть, 35% полиэстер. Производство: Беларусь.",
    sizes: ["XS", "S", "M", "L", "XL"],
    images: ["/placeholders/suit-1.jpg", "/placeholders/suit-1b.jpg"],
    badge: "WEDDING",
  },
  {
    id: "5",
    slug: "bryuki-shirokiy-kroy",
    name: "Брюки широкий крой",
    price: 195,
    category: "trousers",
    collection: "LETO 2025",
    description:
      "Брюки с широкой штаниной и свободным силуэтом. Мягкая посадка, комфорт в носке. Сочетаются с любым верхом из коллекции.",
    composition: "80% вискоза, 20% лён. Производство: Беларусь.",
    sizes: ["XS", "S", "M", "L", "XL"],
    images: ["/placeholders/trousers-2.jpg", "/placeholders/trousers-2b.jpg"],
  },
  {
    id: "6",
    slug: "palto-oversayz",
    name: "Пальто оверсайз",
    price: 450,
    category: "outerwear",
    collection: "001",
    description:
      "Длинное пальто свободного кроя. Геометричный силуэт, объёмные плечи. Вещь с характером — сама по себе является образом.",
    composition: "60% шерсть, 40% полиэстер. Производство: Беларусь.",
    sizes: ["XS", "S", "M", "L"],
    images: ["/placeholders/coat-1.jpg", "/placeholders/coat-1b.jpg"],
    badge: "NEW",
  },
  {
    id: "7",
    slug: "hudi-capsula",
    name: "Худи капсула",
    price: 165,
    category: "hoodie",
    collection: "LETO 2025",
    description:
      "Оверсайз худи из мягкого хлопка. Отличная базовая вещь, легко сочетается с пиджаком или пальто поверх.",
    composition: "100% хлопок. Производство: Беларусь.",
    sizes: ["XS", "S", "M", "L", "XL"],
    images: ["/placeholders/hoodie-1.jpg", "/placeholders/hoodie-1b.jpg"],
  },
  {
    id: "8",
    slug: "zhilet-klassicheskiy",
    name: "Жилет классический",
    price: 135,
    category: "jacket",
    collection: "WEDDING",
    description:
      "Приталенный жилет для создания многослойного образа. Носится поверх рубашки или отдельно. Деталь, которая меняет весь образ.",
    composition: "70% шерсть, 30% полиэстер. Производство: Беларусь.",
    sizes: ["XS", "S", "M", "L", "XL"],
    images: ["/placeholders/vest-1.jpg", "/placeholders/vest-1b.jpg"],
  },
];

export const capsules: Capsule[] = [
  {
    id: "1",
    slug: "svadba",
    title: "СВАДЬБА",
    subtitle: "Образ для самого важного дня",
    occasion: "Свадьба / Торжество",
    image: "/placeholders/capsule-wedding.jpg",
    productIds: ["4", "2", "8", "3"],
  },
  {
    id: "2",
    slug: "meropriyatie",
    title: "МЕРОПРИЯТИЕ",
    subtitle: "Для тех, кто привлекает взгляды",
    occasion: "Деловое / Светское",
    image: "/placeholders/capsule-event.jpg",
    productIds: ["1", "5", "3"],
  },
  {
    id: "3",
    slug: "povsednevnoe",
    title: "ПОВСЕДНЕВНОЕ",
    subtitle: "Стиль без повода — это и есть стиль",
    occasion: "Каждый день",
    image: "/placeholders/capsule-daily.jpg",
    productIds: ["7", "5", "3", "1"],
  },
];

export const categoryLabels: Record<Product["category"], string> = {
  jacket: "Пиджаки",
  trousers: "Брюки",
  shirt: "Рубашки",
  outerwear: "Верхняя одежда",
  hoodie: "Худи",
};

export const collections = ["Все", "LETO 2025", "WEDDING", "001"];
