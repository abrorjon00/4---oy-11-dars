// function grett(name = 'Azizbek', age = 10) {
//     console.log(`salom ${name}, sizning yoshingiz ${age} da`);

// }
// grett();

// Oson masalalar

// 1-misol
// function NumberKvadrat() {
// let number = +prompt("sonni kiriting...")

//     console.log(number ** 2);

// }
// NumberKvadrat()


// 2-misol
// function IkkiSon() {
// let a = +prompt("sonni kiriting...")
// let b = +prompt("sonni kiriting...")
// let res;
// res = a + b
//     console.log(res)

// }
// IkkiSon()



// 3-misol
// function Ism(name = 'Abrorjon') {
//     console.log(`salom ${name}`);

// }
// Ism();



// 4-misol
// function IkkiSondanKattasi() {
//     let a = +prompt("1- sonni kiriting...")
//     let b = +prompt("2- sonni kiriting...")
// let counter = 0;
// if (a > b) {
//     counter = a
// } else {
//     counter = b
// }
// console.log(counter);

// }
// IkkiSondanKattasi()



// 5-misol
// function ArrayYigindisi(arg) {

//     let res = 0;
//     for(let i = 0; i < arg.length; i++) {
//         res += arg[i]
//     }
//     console.log(res);

// }
// let arr = [2, 3, 5, 6, 7];
// ArrayYigindisi(arr)



// 6-misol
// function MusbatElement() {
//     let num = +prompt("sonni kiriting...")
//     if (num > 0) {
//         console.log("musbat son");

//     } else {
//         console.log("musbat son emas");
//     }

// }
// MusbatElement()



// 7-misol
// function StringLengsi() {
//     let num = "salom"
// console.log(num.length);

// }
// StringLengsi()



// 8-misol
// function ConcatString() {
// let a = "salom"
// let b = "Xayr"
// let res = a.concat(b)    
// console.log(res);

// }
// ConcatString();



// 9-misol
// let arr = [2, 4, 2, 6, 9];
// function MinElement(arg) {
//     let min = arg[0];
//     for(let i = 0; i < arg.length; i++) {
//         if (arg[i] > min) {
//            min =  arr[i]
//         }
//     }
//     return min
// }
// console.log(MinElement(arr));



// 10-misol
// function reverseString(str) {
//   return str.split('').reverse().join('');
// }
// let myString = "hello";
// let reversed = reverseString(myString);
// console.log(reversed); 



// Massiv va funksiyalar


// 1-misol
// function Array() {
//     let arr = [2, 4, 6, 8]
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
// Array()



// 2-misol
// let arr = [2, 9, 3, 4]

// function MaxElement(arg) {
//     let max = arr[0];
//     for (let i = 1; i < arg.length; i++) {
//         if (arg[i] > max) {
//             max = arg[i]
//         }
//     }
//     return max
// }
// console.log(MaxElement(arr));



// 3-misol
// function LengthArray() {
//     let arr = [2, 4, 5, 7, 8]
//     console.log(arr.length);

// }
// LengthArray()



// 4-misol
// function Yigindisi(arg) {
//     let sum = 0;
//     for (let i = 0; i < arg.length; i++) {
//         sum += arg[i]
//     }
//     return sum

// }
// let arr = [2, 3, 4, 5, 6]
// console.log(Yigindisi(arr));


// 6-misol
// function ToqSon(arg) {
//     let res = [];
//     for (let i = 0; i < arg.length; i++) {
//         if (arg[i] % 2 == 1) {
//             res.push(arg[i])
//         }
//     }
//     return res

// }
// let arr = [2, 3, 4, 5, 6, 7];
// console.log(ToqSon(arr));


// 7-misol
// function reverseArray(arg) {
//     return arg.reverse();
//   }
//   let arr = [2, 3 ,4, 7]
//   console.log(reverseArray(arr));
  

// 8-misol
// function ManfiyElement(arg) {
//   let res = [];
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] < 0) {
//       res.push(arg[i])
//     }
//   }
//   return res
  
// }
// let arr = [2, -2, -4, 1, -5];
// console.log(ManfiyElement(arr));


// 9-misol
// function OxirfiElement(arg) {
//   arg.pop()
//   return arg
// }
// let arr = [2, 4, 5]
// console.log(OxirfiElement(arr));


// 10-misol
// function OxirfiElement(arg) {
//   arg.push(100)
//   return arg
// }
// let arr = [2, 4, 5]
// console.log(OxirfiElement(arr));

// 11-misol
// function Ikkimassiv(arg1, arg2) {
// let res = arg1.concat(arg2)

//   return res
// }
// let arr1 = [2, 3, 5];
// let arr2 = [6, 6, 7];
// console.log(Ikkimassiv(arr1, arr2));



// 12-misol
// function KvadratCounter(arg) {
//   let res = [];
//   for (let i = 0; i < arg.length; i++) {
//     res.push(arg[i] ** 2)
    
//   }
//   return res
// }
// let arr = [1, 2, 3, 4];
// console.log(KvadratCounter(arr));


// 13-misol
// function ToqSon(arg) {
//   let res = [];
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] % 2 == 1) {
//       res.push(arg[i])
//     }
//   }
//   return res
// }
// let arr = [2, 3, 4, 5, 6, 7, 8, 9];
// console.log(ToqSon(arr));



// 14-misol
// function toUpperCaseArray(arr) {
//   for (let  i = 0; i < arr.length; i++) {
//       arr[i] = arr[i].toUpperCase();
//   }
//   return arr;
// }
// let  myArray = ["hello", "googbye", "javascript"];
// let upperArray = toUpperCaseArray(myArray);
// console.log(upperArray); 


// 15-misol
// function StringLength(arg) {
//   let res = [];
//   res.push(arg.length)
  
//   return res
// }
// let arr = "'salom', 'hayr'";
// console.log(StringLength(arr));


