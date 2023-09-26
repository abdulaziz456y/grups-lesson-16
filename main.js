// misol 1

// masala sharti: teskari tartibda chiqaring


// function getLevel3(arr) {
//   let evenArr = [];
//   for (let el of arr) {
//     if (el++) {
//       evenArr.push(el)
//     }
//   }
//   return evenArr.reverse();
// }

// let res = getLevel3([1, 2, 3, 4, 5, 6])

// console.log(res);



// misol 2 
// masala sharti: katta hariflar kichkina qilib yozilsin

// let str = "ABDULAZIZ";

// let strFF = str.split("");

//   for (let i in strFF) {
//     if (strFF[i] !== strFF[i].toLowerCase()) {
//       strFF[i] = strFF[i].toLowerCase();
//     }
//   }

// let strENd = strFF.toString().replaceAll(",", "");

// console.log(strENd);


// misol 3
// masla sharti: raqamlarni yigindisi

// let arr = [10,20,30,40,50,60,70,80,90,100];  // 550  
    
// let res = arr.reduce((item, total) => item + total, 0)
// console.log(res);


// misol 4 
// masala sharti: sozlarni uzunligini chiqarib berish

// function obj(array) {
//   const object = {};
//   for (const string of array) {
//     const length = string.length;
//     object[length] = string;
//   }
//   return object;
// }

// const array = [ "aziz", "anvar","xumoyun","abdulaziz"];
// const object = obj(array);
// console.log(object);


// misol 5
// masala sharti: eng kichkina qiymatli son chiqarilsin


// let numbers = [10, 5, 7, 105, 30];

// numbers.sort(function(a, b) {
//   return a - b;
// })

// console.log(numbers[0]);


// misol 6
// masla sharti: toq sonlarni chiqaring


// function getLevel3(arr) {
//   let evenArr = [];
//   for (let el of arr) {
//     if (el % 2 === 1) {
//       evenArr.push(el)
//     }
//   }
//   return evenArr;
// }

// let res = getLevel3([4, 5, 7, 8, 6, 9])

// console.log(res);

// misol 7
// masla sharti: manfiy musbatligini chiqarish

// function oddOrEven(array) {
//   if(array.length == 0){
//     return 'manfiy'
//   }
//   var sum = array.reduce(add, 0)
//   function add(x, y){
//     return x + y
//   }
  
//   if(sum % 2 == 0){return 'manfiy'}
//   else{return 'musbat'}
// }

// console.log(oddOrEven.);

// misol 8 
// masla sharti: 