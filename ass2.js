// ------Q-1-------------

// function addNum(num) {
//     return function (x) {
//         return x + num;
//     }
// }

// const addFive = addNum(5);
// console.log(addFive(10));


// ------Q-2-------------

// function searchArray(arr, value) {
//     if (arr.length === 0) {
//         return false;
//     } else if (arr[0] === value) {
//         return true;
//     } else {
//         return searchArray(arr.slice(1), value);
//     }
// }

// const myArray = [1, 2, 3, 4, 5];
// console.log(searchArray(myArray, 3));


// ------Q-6-------------

// let prevStudents = localStorage.getItem("students");
// let students = prevStudents ? JSON.parse(prevStudents) : [];
// function provideStudent(key, object) {
//     let std = {
//         name: prompt("Enter Name"),
//         rollNo: +prompt("Enter Roll no"),
//         teacher: prompt("Enter Teachers Name"),
//         className: prompt("Enter Your Class"),
//     };
//     students.push(std);
//     console.log(students);
//     let stringify = JSON.stringify(students);
//     localStorage.setItem("students", stringify);
// }

