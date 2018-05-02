console.log(__filename);

// splice(beiginIndex, deleteCount, ...insertArgs)
let arr = [1, 2, 3, 4, 5];
console.log("原数组" + arr);
let deleteElems = arr.splice(1, 2, 110, 111);
console.log("删除的元素" + deleteElems.toString());
console.log("splice后的数组" + arr);

console.log("-----------------");

let arr1 = [1, 2, 3, 4, 5];
console.log("原数组" + arr1);
let sliceelems = arr1.slice(1, 2)
console.log("截取的数组元素" + sliceelems);
console.log("slice后的数组" + arr1);
let sliceelems1 = arr1.slice(1);
console.log("截取的数组元素有" + sliceelems1);

console.log("-----------------");

// forEacch(value, index, arr)
let arr2 = [1, 3, 2, 6, 4, 9, 8, 4, 5];
arr2.forEach(e => {
    console.log(e);
})

//filter
let filterarr1 = arr2.filter(e => e > 5)
console.log(filterarr1);

//map
let maparr1 = arr2.map(e => e*2)
console.log(maparr1);

// reduce
arr2.reduce((pre, cur) => {
    console.log("嘿嘿");
    console.log(pre);
    console.log(cur);
    console.log("嘿嘿");
    return pre + cur;
});

//some
let someFlag = arr2.some(e => e>8);
console.log(someFlag);

let someFlag1 = arr2.some(e => e>9);
console.log(someFlag1);

//every
let everyFlag = arr2.every(e => e>5);
console.log(everyFlag);

let everyFlag1 = arr2.every(e => e<10);
console.log(everyFlag1);

//length
console.log(arr2.length);

//push pop
let newSize = arr2.push(888);
console.log(arr2);

let deleleElem = arr2.pop();
console.log(arr2);

//shift unshift
let newSize1 = arr2.unshift(123);
console.log(arr2);

let shiftElem = arr2.shift();
console.log(arr2);

// concat
let concatResult = arr2.concat(123123, 123124);
console.log(concatResult);
console.log(arr2)

//indexOf
let index = arr2.indexOf(3);
console.log(index);

// 找不到返回-1
let notFound = arr2.indexOf(1231);
console.log(notFound);

// reverse 改变原数组
let reverseArr = arr2.reverse();
console.log(reverseArr);

//join
console.log(arr2.join(""))
console.log(arr2.join("--"))
console.log(arr2.join("."))

//sort 改变原数组
let sortArr = arr2.sort();
console.log(sortArr);

let sortArr1 = arr2.sort((a,b) => {
    return a - b;
});
console.log(sortArr1);

let sortArr2 = arr2.sort((a,b) => {
    return b - a;
})
console.log(sortArr2);
console.log(arr2);