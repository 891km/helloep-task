export const getCategoryColor = ({ categories, value }) => {
  return categories.find((cat) => cat.value === value)?.color || "#787878";
};

export const getCategoryLabel = ({ categories, value }) => {
  return categories.find((cat) => cat.value === value)?.label || value;
};
