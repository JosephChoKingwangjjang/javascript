// var anyNumber = Number(prompt("숫자를 입력하세요"));
// var i
// var howMany = 0;

// if (anyNumber !== null) {
//     for(i = 1; i < anyNumber; i++) {
//         if(i % 3 === 0) {
//             document.write(i + ", ")
//             howMany++;
//         }
//     }
//     document.write("총" + howMany + "개 입니다.")
// }




function calculateDaysBetween(startDate, endDate) {
    var start = new Date(startDate);
    var end = new Date(endDate);
    var timeDifference = end.getTime() - start.getTime();

    var daysDifference = timeDifference / (1000 * 3600 * 24);

    return Math.floor(daysDifference);
}

function getUserInputAndCalculateDays() {
    var dateArray = [];
    for (var i = 0; i < 2; i++) {
        if (i === 0) {
            dateArray.push(prompt("책을 읽기 시작한 날짜를 입력하세요 (YYYY/MM/DD)"));
        } else {
            dateArray.push(prompt("현재 날짜를 입력하세요 (YYYY/MM/DD)"));
        }
    }

    var daysTaken = calculateDaysBetween(dateArray[0], dateArray[1]);
    
    alert(`책을 읽는데 ${daysTaken}일이 걸렸습니다.`);
}

getUserInputAndCalculateDays();
