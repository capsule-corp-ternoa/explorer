export const ellipsifyMiddle = (address: string, length: number = 28) => {
  if (address.length < length) {
    return address
  } else {
    const half = Math.floor(length / 2)
    return address.slice(0, half) + '...' + address.slice(-half)
  }
}
