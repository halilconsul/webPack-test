const arr = [1, 2, 4, 19, 93, 1.5];

const getMaxValue = arr => arr.reduce((acc, val) => (acc > val ? acc : val));

const maxValue = getMaxValue(arr);

console.log(maxValue);
