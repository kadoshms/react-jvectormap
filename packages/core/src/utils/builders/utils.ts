/**
 * remove undefined values from object
 * @param object
 */
export const stripUndefinedValues = (object: { [key: string]: unknown }) =>
  Object.fromEntries(
    Object.entries(object).filter((entry) => entry[1] !== undefined),
  );
