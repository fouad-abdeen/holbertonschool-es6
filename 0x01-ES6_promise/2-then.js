/* eslint-disable linebreak-style */
export default function handleResponseFromAPI(promise) {
  promise.finally(() => {
    console.log('Got a response from the API');
  }).then(() => ({ status: 200, body: 'success' })).catch(() => {
    throw new Error();
  });
}
