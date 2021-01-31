/* eslint-disable linebreak-style */
export default function handleResponseFromAPI(promise) {
  promise.finally(() => {
    console.log('Got a response from the API');
  }).then(() => ({ status: 200, body: 'Success' })).catch(() => {
    console.error('The fake API is not working currently');
  });
}
