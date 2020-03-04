const form = document.querySelector(".js-form"),
//쿼리 셀렉터는 찾은 첫번쨰것을 가져온다
//쿼리셀렉터올은 모든것을 가져옴
 input = form.querySelector("input"),
 greetings = document.querySelector(".js-greetings");

 //local storage : 작은 정보를 유저 컴퓨터에 저장하는 방법

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    //텍스트를 색칠할꺼라면 폼을 숨겨야함
    greetings.classList.add(SHOWING_CN);
    greetings.innerText = `Hello ${text}`;
}
//이름을 색칠하자

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        
        //유저가 없는경우
    } else{
        paintGreeting(currentUser);
        //유저가 있는경우, text 함수를부름
    }
}


function init(){
    loadName();
}

init();