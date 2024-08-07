export default function handleResponseFromAPI(promise) {
  promise.then(
    (body) => {
      console.log('Got a response from the API');
      return {...body};
    },
  ).catch(() => {
    return new Error();
  });
}
