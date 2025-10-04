function tratarErroVariavelNaoDefinida() {
  try {
    let variavelNaoDefinida;
    if (variavelNaoDefinida === "") {
      throw new Error("Variavel não definida");
    }
  } catch (error) {
    console.error(error);
  }
}

tratarErroVariavelNaoDefinida();
