const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber){
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);

}
// +1을하는 이유는 math.random() 함수가 0을 줄수있기때문에

function getRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER); 
    return number;
}

function init(){
    const randomNumber = getRandom();
    paintImage(randomNumber)
}

init();