// var number;


// let number2;
// const number3 = 4;

// var sum = function (a, b) {
//     return a + b;
// }

// document.write("함수 실행 결과:" + sum(10, 20))

// (function () {
//     var userName = prompt("이름을 입력하세요.");
//     document.write("안녕하세요" + userName + "님")
// }())

// (function (a, b) {
//     var result = a + b;
//     return(result);
// }(10, 20))

// const hi = () => {return "안녕하세요";}

// const hello = user => {return user + "님 안녕하세요"}

// const addNumber = (a, b) => {return a + b;}

// var result = addNumber(2, 3);

// function multiple(a, b = 5, c = 10) {
//     return a * b + c;
// }

// function clacSum(n) {
//     var sum = 0;

//     for(let i = 1; i < n+1; i++) {
//         sum += i
//     }
//     document.write("1부터" + n + "까지 더하면" + sum)
// }

// var userNumber = prompt("얼마까지 더할까요?");
// if(userNumber !== null) {
//     clacSum(parseInt(userNumber))
// }


// var name1 = prompt("이름을 입력해 주세요", "조요셉")

// var currentYear = 2024;
// var birthYear;

// birthYear = prompt("태어난 연도를 입력하세요 (YYYY)", "")
// age = currentYear - birthYear + 1;

// var email ;
// email = prompt("이메일을 입력하세요")

// var phoneNumber = prompt("전화번호를 입력하세요")

// var write = [name1, birthYear, email, phoneNumber]

// document.write(name1 + "님 환영합니다!<br>")
// document.write(age + "세");
// console.log(write)

// function collectUserInfo() {
//     var name1 = prompt("이름을 입력해 주세요", "조요셉");
//     var currentYear = 2024;
//     var birthYear;
//     birthYear = prompt("태어난 연도를 입력하세요 (YYYY)", "");
//     var age = currentYear - birthYear + 1;
//     var email = prompt("이메일을 입력하세요");
//     var phoneNumber = prompt("전화번호를 입력하세요");
//     var userInfo = [name1, birthYear, email, phoneNumber];
//     document.write(name1 + "님 환영합니다!<br>");
//     document.write(age + "세");
//     console.log(userInfo);
// }
// collectUserInfo();

// function collectUserInfo() {
// }
// collectUserInfo();
// function collectUserInfo() {
//     var userNumber1 = Number(prompt("국어 점수를 입력하세요"));
// var userNumber2 = Number(prompt("과학 점수를 입력하세요"));
// var userNumber3 = Number(prompt("수학 점수를 입력하세요"));
// var userNumber4 = Number(prompt("영어 점수를 입력하세요"));
// var point = 0;
// point = userNumber1 + userNumber2 + userNumber3 + userNumber4;
// console.log(point);
// var userNumber
// userNumber = point / 4;
// if(userNumber !== null) {
//     if(userNumber >= 60 ) {
//         alert("합격입니다")
//     } else {
//         alert("낙제하셨습니다")
//     }
// }
// switch(userNumber) {
//     case 77 : alert("축하합니다 당신은 숨겨진 숫자를 찾아냈습니다")
//     break;
// }
// }
// collectUserInfo();

// function collectUserInfo() {
//     var anyNumber = Number(prompt("숫자를 입력하세요"));
// var i
// var howMany = 0;;
// if (anyNumber !== null) {
//     for(i = 1; i < anyNumber; i++) {
//         if(i % 3 === 0) {
//             document.write(i + ", ")
//             howMany++;
//         }
//     }
//     document.write("총" + howMany + "개 입니다.")
// }
// }
// collectUserInfo();

// function collectUserInfo() {
// var passWord
// var howMuch = 0;;
// do {
//     passWord = prompt("숫자를 입력하세요")
//     if (passWord !== null) {
//          if (isNaN(passWord)) { // 입력값이 숫자가 아닌 경우 
//             alert("숫자만 인식할 수 있습니다");} 
//         else {
//         passWord = Number(passWord);
//         if (passWord < 20090304) {
//             alert("작습니다")
//             howMuch++;
//         } else if (passWord > 20090304) {
//             alert ("큽니다")
//             howMuch++;
//         } else if (passWord = 20090304) {
//             break;
//         }
//     }}
// } while(passWord !== 20090304);
//     if (passWord === 20090304) {
//         alert("맞췄습니다")
//         howMuch++; }
//     document.write(howMuch + "번 시도하셨습니다.")
// }
// collectUserInfo();

//