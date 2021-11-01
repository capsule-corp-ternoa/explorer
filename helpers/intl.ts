export default {
  locale: 'en',
  formats: {
    time: {
      default: {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }
    },
    number: {
      caps: {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      },
      decimal: {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      },
      noDecimal: { // todo: priceDecimal
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      },
      percentChange: {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 3,
        signDisplay: 'exceptZero'
      }
    }
  }
}
