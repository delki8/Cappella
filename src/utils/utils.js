export const getSize = (width) => {
  let size = 'small';
  if (width > 359 && width < 811) {
    size = 'medium';
  } else if (width > 811) {
    size = 'big';
  }

  return size;
};
