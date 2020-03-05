const form = document.querySelector(".js-form"),
//쿼리 셀렉터는 찾은 첫번쨰것을 가져온다
//쿼리셀렉터올은 모든것을 가져옴
 input = form.querySelector("input"),
 greetings = document.querySelector(".js-greetings");

 //local storage : 작은 정보를 유저 컴퓨터에 저장하는 방법

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);

    //이름저장
}

function handleSubmit(event){
    event.preventDefault(); //input하면 결과값이 사라지지않는다(event 금지)
    const currentValue = input.value;
    console.log(currentValue); // value가 console에 나온다
    paintGreeting(currentValue);
    saveName(currentValue);
} 

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit)
}
//currentUser가 없으면 user의 이름을요청
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    //텍스트를 색칠할꺼라면 폼을 숨겨야함
    greetings.classList.add(SHOWING_CN);
    greetings.innerText = `Hello ${text}`;
}
//이름을 색칠하자
//paintGreeting은 text가 필요하다(=ccurrentvalue값)
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
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