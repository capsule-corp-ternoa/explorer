export const ellipsifyMiddle = (address: string, length: number = 16) => {
  if (address.length < length) {
    return address
  } else {
    const half = Math.floor(length / 2)
    return address.slice(0, half) + '...' + address.slice(-half)
  }
}

export const ellipsifyLast = (address: string, length: number = 6) => {
  if (address.length < length) {
    return address
  } else {
    return address.slice(0, length) + '...'
  }
}

export const formatSec = (sec: number) => {
  const min = Math.floor(sec / 60)
  const hour =  Math.floor(sec / 3600)
  const day = Math.floor(hour / 24)
  const month = Math.floor(day / 31)
  const year = Math.floor(day / 365)

  if (sec < 0) {
    return '6 seconds'
  } else if (sec < 60) {
    if(sec == 1) return `${Math.floor(sec)} second`
    else return `${Math.floor(sec)} seconds`
  } else if (min < 60) {
    if(min == 1) return `${min} min`
    else return `${min} mins`
  } else if (hour < 24) {
    if(hour == 1) return `${hour} hour`
    else return `${hour} hours`
  } else if (day < 30) {
    if(day == 1) return `${day} day`
    else return `${day} days`
  } else if (month < 12) {
    if(month == 1) return `${month} month`
    else return `${month} months`
  } else {
    if(year == 1) return `${year} year`
    else return `${year} years`
  }
}
