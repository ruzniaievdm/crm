export default function currencyFilter(value, currency = 'UAH') {
  return new Intl.NumberFormat('ua-UK', {
    style: 'currency',
    currency
  }).format(value)
}