export const isDigit = (value: string) => {
  const val = typeof value !== 'string' ? String(value) : value;
  const onlyDigits = new RegExp('^[0-9]+$');
  return onlyDigits.test(val);
};

export const isEmptyString = (value: string) => !value || value.trim().length === 0;

export const toISODateString = (date: string) => {
  if (!date) return '';
  const isoDate = date.split('.').reverse().join('-');
  return isoDate;
};

export const onlyDigit = (value: string) =>
  isEmptyString(value) ? '' : value.replace(new RegExp(/[^\d]/, 'g'), '');

export const toCapitalize = (text: string): string => {
  if (isEmptyString(text)) return '';
  const [first, ...restText] = text.split('');
  return `${first.toUpperCase()}${restText.join('').toLowerCase()}`;
};

export const toRuLocalNumber = (int: number) => int.toLocaleString('ru', { style: 'decimal' });

export const correctRusCase = (num: number, case1: string, case2: string, case5: string) => {
  const remainder = num % 10;
  if (remainder === 0 || (remainder >= 5 && remainder <= 9) || (num >= 11 && num < 19)) return case5;

  if (remainder === 1) return case1;

  if (remainder >= 2 && remainder <= 4) return case2;
  return '';
};

export const maxLengthString = (value: string, length: number) => {
  if (value.length > length) return value.slice(0, length);
  return value;
};
