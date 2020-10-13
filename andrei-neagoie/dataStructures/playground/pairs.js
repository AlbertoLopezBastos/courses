const boxes = ['a', 'b', 'c', 'd', 'e']

function logPairs(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] != array[j])
        console.log(array[i], array[j])
    }
  }
}

logPairs(boxes) //0(n^2)

// 0(n^2)  