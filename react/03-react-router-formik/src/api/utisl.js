export const wait = (ms = 800) =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

export const getTimestamp = () => Date.now();

export const throwError = id => {
  throw new Error(`Record with ID ${id} does not exist`);
};
