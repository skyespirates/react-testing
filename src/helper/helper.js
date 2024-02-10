export const generateRandom = () => {
  return Math.floor(Math.random() * 100) + 1;
};

export const randomColor = () =>
  Math.floor(Math.random() * 16777215).toString(16);
