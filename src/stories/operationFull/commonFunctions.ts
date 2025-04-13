export type Category = {
  id: string;
  name: string;
  photo?: string;
};
/**
 * Возвращает 50/50
 * */
export const isLucky = () => {
  return Math.random() > 0.5;
};
/**
 * Создает случайную строку с максимальной длиной 19
 * */
export const createRandomString = (len?: number) => {
  if (typeof len === "number") {
    len = len > 19 ? 19 : len;
  }
  return Math.random().toPrecision(21).toString().substring(2, len);
};
/**
 * Создает случайное число от 0 до maxPrice
 * если maxPrice <= 0 maxPrice устанавливается 1000
 * */
export const createRandomPrice = (maxPrice?: number) => {
  if (typeof maxPrice !== "number") {
    maxPrice = 1000;
  } else if (maxPrice <= 0) {
    maxPrice = 1000;
  }
  return Math.random() * maxPrice;
};
/**
 * Создает случайную категорию (Category)
 * */
export const createRandomCategory = () => {
  return {
    id: createRandomString(),
    name: "categoryName_" + createRandomString(6),
    photo: "photo_" + createRandomString(10),
  };
};
