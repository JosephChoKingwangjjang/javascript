var userNumber1 = Number(prompt("국어 점수를 입력하세요"));
var userNumber2 = Number(prompt("과학 점수를 입력하세요"));
var userNumber3 = Number(prompt("수학 점수를 입력하세요"));
var userNumber4 = Number(prompt("영어 점수를 입력하세요"));

var point = 0;
point = userNumber1 + userNumber2 + userNumber3 + userNumber4;
console.log(point);

var userNumber
userNumber = point / 4;

if(userNumber !== null) {
    if(userNumber >= 60 ) {
        alert("합격입니다")
    } else {
        alert("낙제하셨습니다")
    }
}


switch(userNumber) {
    case 77 : alert("축하합니다 당신은 숨겨진 숫자를 찾아냈습니다")
    break;
}

// 1.산술연산자
// var numberOne = 15 / 2;
// var numberTwo = 13 % 5;

// console.log(numberOne)
// console.log(numberTwo)

// var numberThree = 10;
// var numberFour = numberThree++;

// console.log(numberFour)
// console.log(numberThree)


// console.log(numberOne == numberTwo)
// console.log(numberThree == numberFour)