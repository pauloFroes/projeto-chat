function validateMessage(message) {
  // se a mensagem for diferente de null...
  if (!message) {
    return false;
  }

  return true;
}

const valid = validateMessage("");

// se for válida, não faça nada
// se for inválida, indique que há um erro

// CRIE ENTÃO UMA FUNÇÃO QUE ACIONA O
// validateMessage E DESTAQUE DE VERMELHO O INPUT
