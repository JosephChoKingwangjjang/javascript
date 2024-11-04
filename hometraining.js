var passWord
var howMuch = 0;

do {
    passWord = prompt("숫자를 입력하세요")
    if (passWord !== null) {
         if (isNaN(passWord)) { // 입력값이 숫자가 아닌 경우 
            alert("숫자만 인식할 수 있습니다");} 
        else {
        passWord = Number(passWord);
        if (passWord < 20090304) {
            alert("작습니다")
            howMuch++;
        } else if (passWord > 20090304) {
            alert ("큽니다")
            howMuch++;
        } else if (passWord = 20090304) {
            break;
        }
    }}
} while(passWord !== 20090304)

    if (passWord === 20090304) {
        alert("맞췄습니다")
        howMuch++; }
    document.write(howMuch + "번 시도하셨습니다.")
