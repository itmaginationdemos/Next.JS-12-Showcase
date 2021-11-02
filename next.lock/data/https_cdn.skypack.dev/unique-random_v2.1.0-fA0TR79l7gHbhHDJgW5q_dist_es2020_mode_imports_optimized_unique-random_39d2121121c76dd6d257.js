var uniqueRandom = (minimum, maximum) => {
  let previousValue;
  return function random() {
    const number = Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
    previousValue = number === previousValue && minimum !== maximum ? random() : number;
    return previousValue;
  };
};
export default uniqueRandom;
