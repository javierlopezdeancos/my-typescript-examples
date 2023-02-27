export const getProperty = <KEY extends keyof OBJ, OBJ>(key: KEY, obj: OBJ) => {
  return obj[key];
};
