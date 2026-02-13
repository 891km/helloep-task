export const CATEGORIES = [
  {
    value: "graphic",
    label: "Graphic",
    color: "bg-[#42FF00]",
  },
  {
    value: "editorial",
    label: "Editorial",
    color: "bg-[#D8BAFF]",
  },
  {
    value: "website",
    label: "Website",
    color: "bg-[#92FFF8]",
  },
  {
    value: "identity",
    label: "Identity",
    color: "bg-[#FFEB3A]",
  },
  {
    value: "space",
    label: "Space",
    color: "bg-[#FF93E6]",
  },
  {
    value: "motion",
    label: "Motion",
    color: "bg-[#8883FF]",
  },
  {
    value: "practice",
    label: "Practice",
    color: "bg-[#FF4600]",
  },
  {
    value: "etc",
    label: "ETC",
    color: "bg-[#FF9999]",
  },
];

export const getCategoryColor = (value) => {
  return CATEGORIES.find((cat) => cat.value === value)?.color || "bg-gray-200";
};

export const getCategoryLabel = (value) => {
  return CATEGORIES.find((cat) => cat.value === value)?.label || value;
};
