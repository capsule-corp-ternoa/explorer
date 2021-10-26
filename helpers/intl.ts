export default {
  locale: 'en',
  formats: {
    number: {
      caps: {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      },
      noDecimal: {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      },
      percentChange: {
        style: 'percent',
        signDisplay: 'exceptZero'
      }
    }
  }
}
