export function validateMessageClassico(event) {
  console.log("CHEGOU AQUI!");
  console.log("eventClick", event);

  if (event) {
    return true;
  } else return false;
}

function validateMessageTernario(message) {
  let validation = false;
  message ? (validation = true) : (validation = false);
  return message;
}

function validateMessageSwitch(message) {
  switch (message.length > 30) {
    case 30:
      console.log("O comprimento da mensagem é 30");
      break;
    case 20:
      console.log("O comprimento da mensagem é 20");
      break;
    case 10:
      console.log("O comprimento da mensagem é 10");
      break;
    default:
      console.log("O COMPRIMENTO NÃO ERA ESPERADO");
  }
}

// se for válida, não faça nada
// se for inválida, indique que há um erro

// CRIE ENTÃO UMA FUNÇÃO QUE ACIONA O
// validateMessage E DESTAQUE DE VERMELHO O INPUT
console.log("CHEGOU EM VALIDATE MESSAGE");
