const newNumber = [1, 2, 3, 4, 5, 6];
const array = newNumber.map((elem) => `${elem * 4}`);

const newArray = array.forEach((elem) => elem);
console.log(newArray);
