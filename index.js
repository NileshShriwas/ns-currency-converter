import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi(
  'fca_live_GlgQJQaTlO5kVTEKHyHCrTRYWMlizFUVZ5WucgT7'
);

convertCurrency('USD', 'INR', 3);

export async function convertCurrency(formCurrency, toCurrency, units){
    const res = await freecurrencyapi.latest({
      base_currency: formCurrency,
      currencies: toCurrency,
    });
    const multiplier = res.data[toCurrency];
    return multiplier*units;
}
