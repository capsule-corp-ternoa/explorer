export const getSummary = () =>
  fetch('https://api.coingecko.com/api/v3/simple/price?ids=coin-capsule&vs_currencies=usd&include_24hr_change=true&include_market_cap=true')
    .then(res => res.json())
    .then(res => res['coin-capsule'])
