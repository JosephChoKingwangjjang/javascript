// 객체의 인스턴스와

var now = new Date();
console.log("현재 시각은 : ", now.toLocaleString())

// 내장 객체

// Array 객체
var numbers = new Array(); //배열의 크기를 지정하지 않음
var numbers2 = new Array(4);//배열의 크기를 지정
var numbers3 = Array("one", "two", "three", "four")//Array 객체를 사용한 배열

for(var i = 0; i < numbers3.length; i++) {
    console.log(numbers3[i])
}

// concat

var nums = [1, 2, 3]
var chars = ["a", "b", "c", "d"]

var numsChars = nums.concat(chars);
var charsNums = chars.concat(nums);
console.log(numsChars);
console.log(charsNums);

var string1 = nums.join()
console.log("구분자 없이", string1)
var string2 = chars.join("/")
console.log("구분자 지정", string2)

var nums2 = nums.push(4, 5)
console.log(nums2)

var nums3 = nums.unshift(0)
console.log(nums);

var popped1 = chars.pop();
console.log(chars, "빠진 요소 : ", popped1)
var shift = chars.shift();
console.log(chars, "빠진 요소 : ", shift)

var number = [1, 2, 3, 4, 5]
var newNumber = number.splice(4)
console.log(number);
console.log(newNumber);

var newNumber2 = number.splice(2, 1)
console.log(number);

var newNumber3 = number.splice(1,1,15)
console.log(number);

var colors = ["red", "green", "blue", "white", "black"]
var color2 = colors.slice(2);
console.log(color2)



var current = new Date();

var date = new Date("2024-12-25")

var date2 = new Date("2024-12-25T21:30:00")

var cate3 = new Date("Tue Nov 12 2024 22:32:00 GMT+0900 (대한민국 표준시)")


console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDate())
console.log(current.getDay())
console.log(current.getHours())
console.log(current.getMinutes())
console.log(current.getSeconds())
console.log(current.getMilliseconds())

