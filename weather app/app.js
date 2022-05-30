const wrapper=document.querySelector(".wrapper"),
inputPart=wrapper.querySelector(".input-part"),
infoTxt=inputPart.querySelector(".info-txt"),
inputField=inputPart.querySelector("input");

inputField.addEventListener("keyup",e =>{
    if(e.key=="Enter" && inputField !=""){
        requestApi(inputField.value);
    }
});

function requestApi(city)
{
    let api="https://api.openweathermap.org/data/2.5/weather?q=$(city)&appid=$(API key)";
    
}