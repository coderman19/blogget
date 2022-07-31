const generateRandomId = () =>
  Math.random().toString(35).substring(2, 8) +
  Date.now().toString().substring(8);

export default generateRandomId;

export const assignId = (obj) => ({...obj, id: generateRandomId()});
