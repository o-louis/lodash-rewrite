/*
 ** Creates an array of elements split into groups the length of size.
 ** If array can't be split evenly, the final chunk will be the
 ** remaining elements.
 **
 ** args:
 ** array (Array): The array to process.
 ** [size=1] (number): The length of each chunk
 **
 ** (Array): Returns the new array of chunks.
 */

const chunk = (arr, size = 1) => {
  let [newArr, chunk] = [[], []];

  for (let i = 0; i < arr.length; ) {
    chunk = [];
    for (let j = 0; j < size && i < arr.length; j++) {
      chunk = [...chunk, arr[i++]];
    }
    newArr.push(chunk);
  }

  return newArr;
};

export default chunk;
