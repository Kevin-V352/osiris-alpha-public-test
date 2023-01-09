export const currencyFormat = (value: number | null): string | null => {

  if (!value) return null;

  const formatter = new Intl.NumberFormat('en-US', {
    style:    'currency',
    currency: 'USD'
  });

  return formatter.format(value);

};

export const messageTemplate = (
  body: string,
  title: string = 'Example title',
  renderFooter: boolean = true,
  footer: string = 'Servicio potenciado por T&L. Gracias por confiar en nosotros.'
): string => (`*${title}*\n\n${body}\n\n${renderFooter && `_${footer}_`}
`);
