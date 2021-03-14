export const getSize = (height) => {
  let size = 'small';

  if (height > 534 && height < 668) {
    size = 'medium';
  } else if (height > 667 && height < 897) {
    size = 'regular';
  } else if (height > 896) {
    size = 'big';
  }

  return size;
};
