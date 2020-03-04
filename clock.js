const clockContainer = document.querySelector(".js-clock"),
// js-clock 이라는 class이름을 찾기위해서 queryselector element의 자식을 탐색
 clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}`;
    // `이걸쓰는거 주의
    // 초단위에서 01,02나오게하려고 하면 삼항연상자,작은if 실행
    // 초가 10초보다 작으면 `0`이부분이 실행 거짓이면 뒷부분실행
    // : 아니면
}

function init() {
    getTime();
    setInterval(getTime, 1000);
    //시간을 얻는부분,매초마다
}

init();