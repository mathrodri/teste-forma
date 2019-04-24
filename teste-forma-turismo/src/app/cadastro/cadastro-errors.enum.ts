export const errorsEnum = {
  required() {
    return 'Campo obrigatório';
  },
  minlength(minlength) {
    return `Campo com um mínimo de ${minlength} caracteres`;
  }
};
