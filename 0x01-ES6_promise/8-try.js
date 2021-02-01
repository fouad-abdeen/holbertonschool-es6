/* eslint-disable linebreak-style */
export default function divideFunction(numerator, denominator) {
  try {
    if (denominator === 0) {
      throw new Error('cannot divide by 0');
    } else {
      const division = numerator / denominator;
      return division;
    }
  } catch (e) {
    return e;
  }
}
