/* eslint-disable linebreak-style */
let nbrOfQueries = 0;
export const weakMap = new WeakMap();

export const queryAPI = (endpoint) => {
  if (nbrOfQueries >= 5) {
    throw new Error('Endpoint load is high');
  }
  // eslint-disable-next-line no-plusplus
  nbrOfQueries++;
  weakMap.set(endpoint, nbrOfQueries);
};
