/* eslint-disable linebreak-style */
export default function handleResponseFromAPI(promise) {
  promise.then(() => {
    console.log('Got a response from the API');
  }).catch(() => {
    throw new Error();
  });
  return ({ status: 200, body: 'success' });
}
