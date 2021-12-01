import { CustomFormats } from "@formatjs/intl";

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
        minimumFractionDigits: 3,
        maximumFractionDigits: 3
      },
      decimal: {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      },
      fees: {
        minimumFractionDigits: 15,
        maximumFractionDigits: 15
      },
      priceDecimal: {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      },
      percentChange: {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 1,
        signDisplay: 'exceptZero'
      }
    }
  } as CustomFormats
}
