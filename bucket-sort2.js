function bucketSort(array) {
  const n = array.length;
  // Declare an empty array by creating a new instance of the global Array JavaScript object and pass it the number that denotes the length of the original array.

  /* as per MDN 
  let array = new Array(arrayLength);
  arrayLength
    If the only argument passed to the Array constructor is an integer between 0 and 2^32-1 (inclusive), this returns a new JavaScript array with its length property set to that number (Note: this implies an array of arrayLength empty slots, not slots with actual undefined values).

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  */
  let allBuckets = new Array(n);

  if (n < 2) {
    return array
  }
  
  for (let i = 0; i < n; i++) {
    allBuckets[i] = [];
  }


  for (let i = 0; i < n; i++) {
    const index = Math.floor(n * array[i]);
    console.log("Index", index);
    allBuckets[index] = allBuckets[index] || [];
    allBuckets[index].push(array[i])
  }

  //Get rid of the empty buckets.
  let filteredBuckets = allBuckets.filter(bucket => bucket.length > 0)

  // Use ES6 spread syntax to flatten the array 
  let sortedArray = [].concat(...filteredBuckets);
 
  /* OR use .apply() and .concat() built-in array methods 
     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

     let sortedArray = [].concat.apply([], filteredBuckets);
  */
  
  /*                    OR use .reduce()
    let sortedArray = filteredBuckets.reduce((prev, curr) => {
       return prev.concat(curr);
  });

  */
  return sortedArray;
}


function insertionSort(array) {
  for(let i = 0; i < array.length; i++) {
    let temp = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}

console.log(bucketSort([11, 9, 21, 8, 17, 19, 13, 1, 24]));
console.log(bucketSort([1.2, 5.1, 8, 5.2, 6.6, 7.8, 7.086, 100, 189, 0.10, 2.30, 0.1234, 0.3434, 0.565, 0.656, 0.665, 0.897]));