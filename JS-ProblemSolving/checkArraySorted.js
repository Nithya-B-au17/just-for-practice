function checkArrayIsSorted(arr) {
  for (let i = 1; i < arr.lenght; i++) {
    if (arr[i - 1] > arr[i]) {
      console.log('NOt Sorted')
      return false
    }
  }
  console.log('Array is Sorted')
  return true
}

checkArrayIsSorted(3, 4, 6, 7, 8, 10)
