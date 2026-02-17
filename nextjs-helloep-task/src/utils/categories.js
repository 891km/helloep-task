export const getCategoryColor = ({ categories, value }) => {
  return categories.find((cat) => cat.value === value)?.color || "bg-gray-200";
};

export const getCategoryLabel = ({ categories, value }) => {
  return categories.find((cat) => cat.value === value)?.label || value;
};
