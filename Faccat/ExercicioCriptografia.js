function cripto(number, frase) {
  // Verifica se o número é válido
  if (number < 0) {
    throw new Error('Número inválido');
  }

  // Define o alfabeto em minúsculas e maiúsculas como constantes
  const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
  const alfabetoMaiusculo = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Inicializa a string de posições criptografadas
  let posicoes = '';

  // Percorre cada caractere da frase
  for (let i = 0; i < frase.length; i++) {
    // Verifica em qual alfabeto o caractere está presente e obtém sua posição
    let posicao = alfabeto.indexOf(frase[i]);
    if (posicao < 0) {
      posicao = alfabetoMaiusculo.indexOf(frase[i]);
    }

    // Se o caractere não estiver presente em nenhum alfabeto, adiciona-o à string de posições criptografadas
    if (posicao < 0) {
      posicoes += frase[i];
    } else {
      // Calcula a posição criptografada deslocando o número especificado
      const quantidadeLetrasAlfabeto = alfabeto.length;
      let posicaoCriptografada = (posicao + number) % quantidadeLetrasAlfabeto;

      // Adiciona a posição criptografada à string de posições criptografadas
      const alfabetoToUse = posicao < alfabeto.length ? alfabeto : alfabetoMaiusculo;
      posicoes += alfabetoToUse[posicaoCriptografada];
    }
  }

  // Retorna a string de posições criptografadas
  return posicoes;
}

// Exemplo de uso da função
console.log(cripto(7, 'Ola, meu nome eh Carlos! e o Seu?'));
