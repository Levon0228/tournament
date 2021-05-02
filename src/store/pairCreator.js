/** @format */

export const pairCreator = (arr) =>
  arr.reduce(
    (acc, e, i) => (i % 2 ? acc[acc.length - 1].push(e) : acc.push([e]), acc),
    []
  );
