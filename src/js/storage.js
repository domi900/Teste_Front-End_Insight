export function salvarDado(chave, valor) {
  localStorage.setItem(chave, JSON.stringify(valor));
}

export function carregarDado(chave, padrao = null) {
  const dado = localStorage.getItem(chave);
  return dado ? JSON.parse(dado) : padrao;
}