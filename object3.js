// DOM (문서객체모델)
// 자바스크립트를 이용하여 웹 문서에 접근하고 제어할 수 있도록 객체를 사용해 웹 문서를 체계적으로 정리하는 방법

// 모든 html 태그는 요소 노드입니다
// html태그에서 사용하는 텍스트 내용은
//html 태그에 있는 속성은 자식 노드인 속성 영어로 attribute 노드입니다.
//주석은 주석 입니다

//gerElementId
//요소명.getElementById("Id명")
document.getElementById("box")
console.log

//getElementByClassname
document.getElementsByClassName("box2")

//getElementByTagname
document.getElementsByTagName("div")

//querySelector(), querySelectorAll()
document.querySelector("#box")
document.querySelectorAll(".box2")

document.querySelector("#box").getAttribute("src")
// --프로퍼티--
document.getElementById("box").innerHTML = "Hi"
//innerText, innerHTML

// var boxDiv = document.querySelector(".box")
// boxDiv.onclick = function() {
//     alert("이미지를 클릭했습니다")
// }

function imageCliked() {
    alert("이미지를 클릭했습니다")
}

// addEventListener

boxDiv.addEventListener("mouseover")
boxDiv.addEventListener("mouseout")

function changeText() {
    boxDiv.innerHTML = "Hi"
}

function changeText() {
    boxDiv.innerHTML = ""
}

// createElement
// 새로운 요소 추가
document.createElement(div);

//appendchild

boxDiv.appendChild(newDiv)
boxDiv.removeChild(newDiv)