import { validateMessageClassico } from "./validateMessage";

console.log("CHEGOU EM SEND MESSAGE");

const btnSend = document.querySelector("#btn-send");
console.log("BOTÃO SEND", btnSend);
btnSend.addEventListener("click", validateMessageClassico);
