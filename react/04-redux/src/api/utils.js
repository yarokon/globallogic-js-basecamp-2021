export const wait = (ms = 1000) =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

export const createGetId = initialId => () => ++initialId;

export const getTimestamp = () => Date.now();

export const throwError = id => {
  throw new Error(`Record with ID ${id} does not exist`);
};

export const omit = (obj, [paths]) =>
  Object.keys(obj)
    .filter(key => !paths.includes(key))
    .reduce(
      (acc, key) => ({
        ...acc,
        [key]: obj[key],
      }),
      {}
    );
