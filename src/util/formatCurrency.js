/* eslint-disable implicit-arrow-linebreak */
export default value =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
