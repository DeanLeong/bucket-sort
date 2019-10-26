function bucketSort(array) {
  //Find the length of the array
  const n = array.length;
  //declare an empty array where we are going to store all buckets
  const allBuckets = [];
  const sortedArray = [];
  //Find the smallest value from the given array using the built in method Math.min();
  // Later we are going to use this value to calculate to which bucket elements should be pushed. 
  const min = Math.min(...array);
  
  //If the length of the array is less than 2, that means that array.length = 1 and array is automatically sorted, so return the array 
  if (n < 2) {
    return array
  }
  // Create all the buckets within allBuckets array. Now allBuckets is two-dimmensional empty array containing n empty arrays. 
  for (let i = 0; i < n; i++) {
    allBuckets[i] = [];
    console.log(allBuckets)
  }

  // Push all elements into their respective buckets. If a bucket falls out of bound of allBuckets, leave it as empty array, else push the elements from the original array into their respective buckets.
  for (let i = 0; i < n; i++) {
    const index = Math.floor((array[i] - min));
    // console.log(index);
    allBuckets[index] = allBuckets[index] || [];
    allBuckets[index].push(array[i]);
  }
   // For each bucket use insertionSort algorithm to sort it individually and then push it to the sorted array.
  allBuckets.forEach(bucket => {
    insertionSort(bucket)
    bucket.forEach(element => sortedArray.push(element))
  })

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
console.log(bucketSort([0,1,5.1, 8, 5.2, 6.6, 7.8, 7.086, 100, 189, 0.10, 2.30, 0.1234, 0.3434, 0.565, 0.656, 0.665, 0.897]));