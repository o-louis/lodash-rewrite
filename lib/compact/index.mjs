/*
 ** Creates an array with all falsey values removed.
 ** The values false, null, 0, "", undefined, and NaN are falsey.
 **
 ** arg:
 ** array (Array): The array to compact.
 **
 ** (Array): Returns the new array of filtered values.
 */

const compact = (arr) =>
  arr.reduce((acc, value) => (value ? [...acc, value] : acc), []);

export default compact;