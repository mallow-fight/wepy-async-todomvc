export const dataVerify = (res) => {
  return new Promise((resolve, reject) => {
    if (res && res.data) {
      return resolve(res)
    }
    return reject(res)
  })
}
