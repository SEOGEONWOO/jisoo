const toDoform = document.querySelector(".js-toDoForm"),
 toDoInput = toDoform.querySelector("input"),
 toDoList = document.querySelector(".js-toDoList");


const TODOS_LS = "toDos"; //toDOs = 할일들



let toDos = []; //할일을 array로추가

function deleteToDo(event){
 const btn = event.target;
 const li = btn.parentNode;
 toDoList.removeChild(li);
 const cleanToDos = toDos.filter(function(toDo){
   return toDo.id !== parseInt(li.id);
 });
 toDos = cleanToDos
 saveToDos();
}//delete버튼
//cleantodos 와 filter는 filterFn이 체크가 된아이템들의 array를 주는것
//filter는 마치 foreach에서 function을 실행하는것 같이 실행
//parseInt string을 숫자로바꿈
//toDo.id는 숫자 , li.id는 문자

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
//toDos를 가져와서 로컬에 저장
//JSON.stringify는 자바스크립트 object를 string으로바꿔줌
function paintToDo(text) {
 const li = document.createElement("li"); //뭔가생성하기를 원하면
 const delBtn = document.createElement("button");
 //삭제 버튼
 const span = document.createElement("span");
 const newId =  toDos.length + 1; //맨처음엔 비어있으니까 id값은 1
 delBtn.innerText = "X";
 delBtn.addEventListener("click", deleteToDo);
 span.innerText = text;
 li.appendChild(delBtn);
 li.appendChild(span);
 li.id = newId;
 toDoList.appendChild(li); //엔터를 누르면 li생성하고 , delete버튼과 span을생성
 //span과 delete버튼을 li에 span하고 마지막으로 li을 ui에다가 append하는거
 const toDoObj = {
     text: text,
     id: newId
 };
 toDos.push(toDoObj); //toDos array안에 toDoObj를 넣는다
 saveToDos() //push한 이후에 호출
 
} 

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
     const paresdToDos = JSON.parse(loadedToDos);
     paresdToDos.forEach(function(toDo){
       paintToDo(toDo.text);
     });
    }
  //불러오는게 string이라서 JSON사용   
}
//뭔가를 load해야하는데 그건 로컬스트리지에서 온거
//JSON.parse 해주기전, 해준 후 각각 확인
//foreach : array에 담겨져있는 것들 각각에한번씩 함수를 실행
//toDos를 가져온뒤에 parse, 가져온걸 JS object로변환하고 각각 painttodo function실행
function init(){
    loadToDos();
    toDoform.addEventListener("submit", handleSubmit)
}

init();