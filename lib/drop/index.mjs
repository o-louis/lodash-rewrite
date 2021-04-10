/*
 ** Creates a slice of array with n elements dropped from the beginning.
 **
 ** Args
 ** array (Array): The array to query.
 ** [n=1] (number): The number of elements to drop.
 **
 ** Returns(Array): Returns the slice of array.
 */

const drop = (arr, n = 1) => arr.slice(n);

export default drop;
