export const getCurrentYear = () => new Date().getFullYear();

export const getDecimalFromHex = (hexStr: string) => {
  const num = parseInt(hexStr, 16);
  return Number.isNaN(num) ? 0 : num;
};

export const getHexFromDecimal = (decimal: number) => {
  const str = decimal.toString(16);
  return str.length % 2 > 0 ? '0' + str : str;
};

export const hex2rgba = (hex: string, alpha: number = 1) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r},${g},${b},${alpha})`;
};
