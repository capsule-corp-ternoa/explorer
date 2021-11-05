export const ellipsifyMiddle = (address: string, length: number = 28) => {
  if (address.length < length) {
    return address
  } else {
    const half = Math.floor(length / 2)
    return address.slice(0, half) + '...' + address.slice(-half)
  }
}

export const formatSec = (sec: number) => {
  const min = Math.floor(sec / 60)
  const hour =  Math.floor(sec / 3600)
  const day = Math.floor(hour / 24)
  const month = Math.floor(day / 31)
  const year = Math.floor(day / 365)

  if (sec < 60) {
    return `${sec} seconds`
  } else if (min < 60) {
    return `${min} mins`
  } else if (hour < 24) {
    return `${hour} hours`
  } else if (day < 30) {
    return `${day} days`
  } else if (month < 12) {
    return `${month} months`
  } else {
    return `${year} years`
  }
}
