const numbers = [4, 7, 1, 8, 3, 9, 2, 0, 5, 6];

// bubble sort. No se usa nunca. Solo para aprender.

const bubble = (arr) => {
  let aux = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
      }
    }

  }
  console.log(arr)
  return arr
}


//bubble(numbers);

// selection sort. no se usa nunca. solo para aprender.

const selection = (arr) => {
  let min = arr[0];
  let aux = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        aux = j;
      }
    }
    arr[aux] = arr[i];
    arr[i] = min;
    min = arr[i + 1];
  }
  return arr;
}

//selection(numbers)

// insertion sort util cuando tengo pocos items y ya vienen mas o menos ordenados

const insertion = (arr) => {

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      arr.unshift(arr.splice(i, 1)[0]);
    }
    else {
      // loopear para saber donde va
      for (let j = 1; j < i; j++) {
        if (arr[i] > arr[j - 1] && arr[i] < arr[j]) {
          arr.splice(j, 0, arr.splice(i, 1)[0])
        }
      }
    }
  }
  console.log(arr)
  return arr;
}

//insertion(numbers);

// merge sort. muy util. Divide & conquer, no si me importa la memoria.

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2)
  const right = array.slice(middle);
  const left = array.slice(0, middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  // comparo si me vino item tanto en left como en right
  while (leftIndex < left.length && rightIndex < right.length) {
    // ahora si me fijo si uno es mas grande que el otro
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    }
    else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  console.log(left, right)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


//const answer = mergeSort(numbers);
//console.log(answer);

// quick sort, mas util que merge si podes asegurar un buen pivote, sino se te va al pasto.

// 1: insertion OK 
// 2: merge NO (radix or counting sort)
// 3: quick OK
// 4: quick NO (merge)
// 5: insertion OK
// 6: merge NO (quick)
// 7: quick o merge OK
// 8: bubble OK