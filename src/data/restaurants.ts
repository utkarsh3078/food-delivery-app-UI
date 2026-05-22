export type Restaurant = {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  location: string;
  distance: string;
  discount: string;
  emoji: string;
  accent: string;
  description: string;
  nutrition: {
    label: string;
    value: string;
    tint: string;
  }[];
};

export const categories = [
  { id: "burger", title: "Burger", emoji: "🍔", tint: "#fff4b8" },
  { id: "seafood", title: "Sea Food", emoji: "🍤", tint: "#ffe1bd" },
  { id: "dessert", title: "Dessert", emoji: "🍰", tint: "#ffc7dc" },
  { id: "steak", title: "Steak", emoji: "🥩", tint: "#beeefa" },
  { id: "pizza", title: "Pizza", emoji: "🍕", tint: "#f1f3bb" },
];

export const restaurants: Restaurant[] = [
  {
    id: "123",
    name: "Urban Burger Stack",
    category: "Burger",
    price: 12.99,
    rating: 4.9,
    location: "New York City",
    distance: "12 min",
    discount: "20% OFF",
    emoji: "🍔",
    accent: "#ffe6a9",
    description:
      "A premium grilled beef burger with crisp lettuce, ripe tomato, melted cheese and our signature sauce.",
    nutrition: [
      { label: "Calories", value: "650 kcal", tint: "#fff5a8" },
      { label: "Protein", value: "40 gram", tint: "#ffd6a7" },
      { label: "Fat", value: "30 gram", tint: "#ffc8dd" },
      { label: "Carbo", value: "35 gram", tint: "#bfeef7" },
    ],
  },
  {
    id: "sea-221",
    name: "Grilled Salmon Bowl",
    category: "Sea Food",
    price: 10.99,
    rating: 4.8,
    location: "Brooklyn",
    distance: "18 min",
    discount: "20% OFF",
    emoji: "🍤",
    accent: "#ffd9b7",
    description:
      "Juicy grilled salmon with lemon butter, herbs, warm rice and crunchy garden vegetables.",
    nutrition: [
      { label: "Calories", value: "520 kcal", tint: "#fff5a8" },
      { label: "Protein", value: "38 gram", tint: "#ffd6a7" },
      { label: "Fat", value: "18 gram", tint: "#ffc8dd" },
      { label: "Carbo", value: "30 gram", tint: "#bfeef7" },
    ],
  },
  {
    id: "des-330",
    name: "Berry Cheesecake",
    category: "Dessert",
    price: 8.49,
    rating: 4.7,
    location: "Queens",
    distance: "21 min",
    discount: "15% OFF",
    emoji: "🍰",
    accent: "#ffd6e6",
    description:
      "Creamy vanilla cheesecake topped with mixed berries and a bright strawberry drizzle.",
    nutrition: [
      { label: "Calories", value: "430 kcal", tint: "#fff5a8" },
      { label: "Protein", value: "11 gram", tint: "#ffd6a7" },
      { label: "Fat", value: "22 gram", tint: "#ffc8dd" },
      { label: "Carbo", value: "48 gram", tint: "#bfeef7" },
    ],
  },
  {
    id: "stk-440",
    name: "Pepper Steak Plate",
    category: "Steak",
    price: 14.99,
    rating: 4.9,
    location: "Manhattan",
    distance: "16 min",
    discount: "10% OFF",
    emoji: "🥩",
    accent: "#d9f6ef",
    description:
      "Tender pepper steak with roasted tomatoes, greens and a smoky house glaze.",
    nutrition: [
      { label: "Calories", value: "700 kcal", tint: "#fff5a8" },
      { label: "Protein", value: "46 gram", tint: "#ffd6a7" },
      { label: "Fat", value: "34 gram", tint: "#ffc8dd" },
      { label: "Carbo", value: "28 gram", tint: "#bfeef7" },
    ],
  },
];
