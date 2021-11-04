import { getExtrinsicCount } from './extrinsic'

export const getSummary = async () => {
  const url = 'https://api.coingecko.com/api/v3/simple/price?ids=coin-capsule&vs_currencies=usd&include_24hr_change=true&include_market_cap=true'
  return await Promise.all([
    new Promise(resolve => fetch(url)
      .then(res => res.json())
      .then(res => res['coin-capsule'])
      .catch(() => resolve({}))),
    getExtrinsicCount()
  ]).then(([ summary, extrinsic_count ]) => ({
    ...summary,
    extrinsic_count
  }))
}
