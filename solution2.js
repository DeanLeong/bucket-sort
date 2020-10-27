function bucketSort(array) {
  const n = array.length;
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

  let filteredBuckets = allBuckets.filter(bucket => bucket.length > 0)
  let sortedArray = [].concat(...filteredBuckets);
 
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
