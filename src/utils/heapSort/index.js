const heapify = (arr, lastIdx) => {
  let idx = parseInt(lastIdx / 2) - 1;

  while (idx >= 0) {
    const left = arr[idx * 2 + 1];
    const right = arr[idx * 2 + 2];

    if (left >= right && arr[idx] < left) {
      const temp = arr[idx];
      arr[idx] = arr[idx * 2 + 1];
      arr[idx * 2 + 1] = temp;
    } else if (right > left && arr[idx] < right) {
      const temp = arr[idx];
      arr[idx] = arr[idx * 2 + 2];
      arr[idx * 2 + 2] = temp;
    }
    idx--;
  }
  return arr;
};

export const heapAscending = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr = heapify(arr, i);

    if (arr[0] > arr[i]) {
      const temp = arr[i];
      arr[i] = arr[0];
      arr[0] = temp;
    }
  }
  return arr;
};
