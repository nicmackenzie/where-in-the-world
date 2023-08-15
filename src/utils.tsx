export function numberFormatter(number: number) {
  return new Intl.NumberFormat().format(number);
}

export const PAGE_SIZE = 20;
