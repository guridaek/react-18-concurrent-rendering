export const generateItems = () =>
  Array.from({ length: 10000 }).map((_, index) => (index + 1).toString());
