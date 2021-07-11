
var btnTranslate=document.querySelector('#btn-translate');
var inputText=document.querySelector('#input-text');
var outputText=document.querySelector('#output-text');

console.log(btnTranslate)




var serverURL="https://api.funtranslations.com/translate/minion.json"

 function urlGenerator(text){
     return serverURL+"?"+"text="+text
}
function errorHandler(){
    console.log("Error occured:",error)
    alert("Server translates only 5 times per hour,Try again after an hour! ")
}

function clickHandler(){
    var txtInput=inputText.value
    fetch(urlGenerator(txtInput))
    .then(response=>response.json())
    .then(json=>{
        var translate=json.contents.translated
        outputText.innerText=translate
    })
    .catch(errorHandler)
}


btnTranslate.addEventListener("click",clickHandler)
