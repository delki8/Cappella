export const getSize = (height) => {
  let size = 'xsmall';

  if (height < 534) {
    size = 'small';
  } else if (height > 534 && height < 597) {
    size = 'medium';
  } else if (height > 597 && height < 697) {
    size = 'large';
  } else if (height > 697 && height < 797) {
    size = 'xlarge';
  } else if (height > 797 && height < 897) {
    size = 'xxlarge';
  } else if (height > 897) {
    size = 'xxxlarge';
  }

  return size;
};
