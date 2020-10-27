function bucketSort(array) {
  const n = array.length;
  const allBuckets = [];
  const sortedArray = [];
  const min = Math.min(...array);
  
  if (n < 2) {
    return array
  }
  for (let i = 0; i < n; i++) {
    allBuckets[i] = [];
    console.log(allBuckets)
  }

  for (let i = 0; i < n; i++) {
    const index = Math.floor((array[i] - min));
    allBuckets[index] = allBuckets[index] || [];
    allBuckets[index].push(array[i]);
  }
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
