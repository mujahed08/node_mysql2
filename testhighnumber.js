const student = [1, 2, 3, 4, 5, 6, 7, 8, 9, 65];

let max = student[0];

for (let i = 0; i < student.length; i++) {
  if (max < student[i]) {
    max = student[i];
  }
}
console.log(max);
