// function changeBg(color) {
//     var result = document.querySelector("#box");
//     result.style.display = color
// }

// function show() {
//     document.querySelector("#box").style.display = "block"
// }

// function hide() {
//     document.querySelector("#box").style.display = "none"
// }

function videoClip() {
    var result = document.querySelector("#상세설명");
    
    // display가 'block'이면 'none'으로, 'none'이면 'block'으로 변경
    result.style.display = result.style.display === "block" ? "none" : "block";
}