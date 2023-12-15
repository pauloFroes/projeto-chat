function hideMessageError() {
  console.log("CHEGOU AQUI");
  const messageDom = document.querySelector("#msg-error");
  messageDom.classList.remove("message-info-show");
  messageDom.classList.add("message-info-hide");
}

function hideMessageSucess() {
  console.log("CHEGOU AQUI");
  const messageDom = document.querySelector("#msg-sucess");
  messageDom.classList.remove("message-info-show");
  messageDom.classList.add("message-info-hide");
}

function showMessageSucess() {
  const messageErrorDom = document.querySelector("#msg-error");
  messageErrorDom.classList.add("message-info-hide");

  const messageDom = document.querySelector("#msg-sucess");
  messageDom.classList.remove("message-info-hide");
  messageDom.classList.add("message-sucess");
  messageDom.classList.add("message-info-show");
  setTimeout(hideMessageSucess, 5000);
  console.log("SUCESS");
}

function showMessageError() {
  const messageSucessDom = document.querySelector("#msg-sucess");
  messageSucessDom.classList.add("message-info-hide");

  const messageDom = document.querySelector("#msg-error");
  messageDom.classList.remove("message-info-hide");
  messageDom.classList.add("message-error");
  messageDom.classList.add("message-info-show");
  setTimeout(hideMessageError, 5000);
  console.log("ERROR");
}

const btnSendDom = document.querySelector("#btn-send");
btnSendDom.addEventListener("click", showMessageSucess);
btnSendDom.addEventListener("mouseover", showMessageError);
