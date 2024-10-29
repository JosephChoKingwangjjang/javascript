var passWord = prompt("암호를 입력하세요")

while(i < 6) {
    sum += 1;
    i++;
}

if (passWord !== null)
    if(passWord === 20090304 ){
        alert("암호를 해독하셨습니다")
    } else if(passWord < 20090304) {
        alert ("숫자가 작습니다")
    } else if (passWord >20090304) {
        alert ("숫자가 큽니다")
}
