var userNumber1 = Number(prompt("국어 점수를 입력하세요"));
var userNumber2 = Number(prompt("과학 점수를 입력하세요"));
var userNumber3 = Number(prompt("수학 점수를 입력하세요"));
var userNumber4 = Number(prompt("영어 점수를 입력하세요"));

var point = 0;
point = userNumber1 + userNumber2 + userNumber3 + userNumber4;
console.log(point);

var userNumber = point / 4;

if(userNumber !== null) {
    if(userNumber >= 60 ) {
        alert("합격입니다")
    } else {
        alert("낙제하셨습니다")
    }
}


// switch(userNumber) {
//     case "1" : alert("축하합니다 엉덩이로 이름쓰세요")
//     break;
//     case "2" : alert("축하합니다 코끼리코 다섯바퀴 도세요")
//     break;
//     case "3" : alert("축하합니다 운동장 5바퀴 도세요")
//     break;
//     case "4" : alert("축하합니다 돼지코로 사진찍으세요")
//     break;
//     case "5" : alert("축하합니다 피티체조 10번 하세요")
//     break;
//     default : alert("괘씸한녀석 엉덩이로 이름쓰면서 돼지코로 운동장을 10바퀴 돌아라")
// }

// var userNumber1 = Number(prompt("국어 점수를 입력하세요"));
// var userNumber2 = Number(prompt("과학 점수를 입력하세요"));
// var userNumber3 = Number(prompt("수학 점수를 입력하세요"));
// var userNumber4 = Number(prompt("영어 점수를 입력하세요"));

// 1.산술연산자
// var numberOne = 15 / 2;
// var numberTwo = 13 % 5;

// console.log(numberOne)
// console.log(numberTwo)

// var numberThree = 10;
// var numberFour = ++numberThree;

// console.log(numberFour)
// console.log(numberThree)


// console.log(numberOne == numberTwo)
// console.log(numberThree == numberFour)