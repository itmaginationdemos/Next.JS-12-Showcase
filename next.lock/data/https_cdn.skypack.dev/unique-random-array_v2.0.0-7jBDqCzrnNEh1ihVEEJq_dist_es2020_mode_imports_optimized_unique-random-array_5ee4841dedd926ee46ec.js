import uniqueRandom from "/-/unique-random@v2.1.0-fA0TR79l7gHbhHDJgW5q/dist=es2020,mode=imports/optimized/unique-random.js";
var uniqueRandomArray = (array) => {
  const random = uniqueRandom(0, array.length - 1);
  return () => array[random()];
};
export default uniqueRandomArray;
