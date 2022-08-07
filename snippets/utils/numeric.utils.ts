import { isEmptyString } from './string.utils';

export const randomInteger = (min: number, max: number) => {
  // случайное число от min до (max+1)
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const toDecimalString = (
  val: string,
  locales: string | string[],
  formatOptions?: Intl.NumberFormatOptions,
  parser: 'parseFloat' | 'parseInt' = 'parseFloat'
) => {
  if (isEmptyString(val)) return '';
  const formatter = new Intl.NumberFormat(locales, { ...formatOptions, style: 'decimal' });
  const formattedValue = formatter.format(Number[parser](val));
  return formattedValue;
};

export const isNullOrUndefined = (value: unknown) => value === null || value === undefined;
