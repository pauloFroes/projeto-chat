function removeUserMessage(event) {
  // lógica para enviar para o backend a informação de que o usuário quer apagar aquela mensagem
  // esperar o retorno do backend e se esse retorno for positivo, prosseguir com as etapas abaixo:

  const elementoClicado = event.target;
  const paiElementoClicado = elementoClicado.parentNode;
  const containerExcluir = paiElementoClicado.parentNode;

  const contentChat = document.querySelector(".content-chat");

  contentChat.removeChild(containerExcluir);
}

const imgsTrash = document.querySelectorAll(".img-trash");

imgsTrash.forEach((trash) => {
  trash.addEventListener("click", removeUserMessage);
});
