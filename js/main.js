// pegando elementos do dom pelo nome da classe
const imgDom = document.getElementsByClassName("img-user");
console.log("imgDom", imgDom);

// pegando elementos do dom pelo ID
const inputMessageDom = document.getElementById("input-text-message");
console.log("inputMessageDom", inputMessageDom);

// pegando o primeiro elemento pelo seletor
const contentMessageDom = document.querySelector("div");
console.log("contentMessageDom", contentMessageDom);

// pegando o primeiro elemento pelo seletor
const contentImgDom = document.querySelectorAll("#input-text-message");
console.log("contentImgDom", contentImgDom);
