const weather = document.querySelector(".js-weather");

const API_KEY = "1664bed3d5c604bf0963fcd695fd2d2f"; //날씨API
const COORDS = 'coords';

function getWeather(lat,lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){
       return (response.json());
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
}
//데이터얻는것 fatch
// then 기본적으로 함수를 호출(여기서는 데이터가 완전히 들어온다음 호출)
//json: javascript object

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
 const latitude = position.coords.latitude;
 const longitude = position.coords.latitude;
 const coordsObj = {
     latitude, //위도
     longitude //경도
 };
 saveCoords(coordsObj);
 getWeather(latitude, longitude)
}

function handleGeoError(){
    console.log('cant');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}
//getlocation : object
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
        // getWeather함수호출
    }
}

function init(){
    loadCoords();
}

init();