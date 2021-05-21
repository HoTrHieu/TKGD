export const createIncArray = (arrLength) => {
  if (!arrLength || typeof arrLength !== 'number') return [];
  const arrResult = [];
  for (let index = 0; index < arrLength; index++) {
    arrResult.push(index);
  };
  return arrResult;
};
