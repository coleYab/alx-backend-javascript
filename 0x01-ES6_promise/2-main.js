import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
handleResponseFromAPI(promise);

const promiseFailed = Promise.reject(new Error("Error occured"))
handleResponseFromAPI(promiseFailed)