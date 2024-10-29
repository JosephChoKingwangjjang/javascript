var anyNumber = Number(prompt("숫자를 입력하세요"));
var i
var howMany = 0;

if (anyNumber !== null) {
    for(i = 1; i < anyNumber; i++) {
        if(i % 3 === 0) {
            document.write(i + ", ")
            howMany++;
        }
    }
    document.write("총" + howMany + "개 입니다.")
}

