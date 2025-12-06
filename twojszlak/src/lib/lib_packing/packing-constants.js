export const CATEGORIES = [
  { id: "clothes", label: "Ubrania", icon: "🧥" },
  { id: "electronics", label: "Elektronika", icon: "🔌" },
  { id: "medkit", label: "Apteczka", icon: "💊" },
  { id: "documents", label: "Dokumenty", icon: "📄" },
  { id: "other", label: "Inne", icon: "🎒" },
];

export const TEMPLATES = {
  mountains: [
    { text: "Buty trekkingowe", category: "clothes", qty: 1 },
    { text: "Kurtka przeciwdeszczowa", category: "clothes", qty: 1 },
    { text: "Skarpety trekkingowe", category: "clothes", qty: 3 },
    { text: "Mapa offline / GPS", category: "electronics", qty: 1 },
    { text: "Powerbank", category: "electronics", qty: 1 },
    { text: "Apteczka turystyczna", category: "medkit", qty: 1 },
    { text: "Dowód osobisty", category: "documents", qty: 1 },
  ],
  sea: [
    { text: "Ręcznik plażowy", category: "clothes", qty: 1 },
    { text: "Strój kąpielowy", category: "clothes", qty: 1 },
    { text: "Klapki", category: "clothes", qty: 1 },
    { text: "Krem z filtrem UV", category: "medkit", qty: 1 },
    { text: "Okulary przeciwsłoneczne", category: "other", qty: 1 },
    { text: "Ładowarka do telefonu", category: "electronics", qty: 1 },
    { text: "Dokumenty podróży", category: "documents", qty: 1 },
  ],
  camping: [
    { text: "Śpiwór", category: "other", qty: 1 },
    { text: "Karimata / mata", category: "other", qty: 1 },
    { text: "Palnik turystyczny", category: "electronics", qty: 1 },
    { text: "Gaz do palnika", category: "other", qty: 1 },
    { text: "Menażka / kubek", category: "other", qty: 1 },
    { text: "Czołówka", category: "electronics", qty: 1 },
    { text: "Apteczka", category: "medkit", qty: 1 },
    { text: "Dokumenty + ubezpieczenie", category: "documents", qty: 1 },
  ],
};
