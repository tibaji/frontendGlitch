// src/utils/validators.ts

export interface ValidationError {
  campo: string;
  mensagem: string;
}

/**
 * Valida formato de email
 */
export const validarEmail = (email: string): boolean => {
  // Regex mais rigoroso que HTML5
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return regex.test(email);
};

/**
 * Valida nome (mínimo 2 caracteres, sem números)
 */
export const validarNome = (nome: string): boolean => {
  const nomeClean = nome.trim();
  return nomeClean.length >= 2 && !/\d/.test(nomeClean);
};

/**
 * Valida mensagem (mínimo 10 caracteres)
 */
export const validarMensagem = (mensagem: string): boolean => {
  return mensagem.trim().length >= 10;
};

/**
 * Valida todos os campos do formulário de contato
 */
export const validarFormularioContato = (
  nome: string,
  email: string,
  mensagem: string
): ValidationError[] => {
  const erros: ValidationError[] = [];

  // Validar nome
  if (!nome.trim()) {
    erros.push({ campo: 'nome', mensagem: 'nome é obrigatório' });
  } else if (!validarNome(nome)) {
    erros.push({ campo: 'nome', mensagem: 'nome deve ter pelo menos 2 caracteres e não conter números' });
  }

  // Validar email
  if (!email.trim()) {
    erros.push({ campo: 'email', mensagem: 'e-mail é obrigatório' });
  } else if (!validarEmail(email)) {
    erros.push({ campo: 'email', mensagem: 'e-mail inválido (ex: seu@email.com)' });
  }

  // Validar mensagem
  if (!mensagem.trim()) {
    erros.push({ campo: 'mensagem', mensagem: 'mensagem é obrigatória' });
  } else if (!validarMensagem(mensagem)) {
    erros.push({ campo: 'mensagem', mensagem: 'mensagem deve ter pelo menos 10 caracteres' });
  }

  return erros;
};
