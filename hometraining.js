var passWord
var howMuch = 0;

do {
    passWord = prompt("암호를 입력하세요")
    if (passWord !== null) {
        if (passWord < 20090304) {
            alert("작습니다")
            howMuch++;
        } else if (passWord > 20090304) {
            alert ("큽니다")
            howMuch++;
        } else if (passWord = 20090304) {
            break;
        }
    }
} while(passWord !== 20090304)

    if (passWord === 20090304) {
        alert("맞췄습니다")
        howMuch++;
    }
    document.write(howMuch + "번 시도하셨습니다.")
