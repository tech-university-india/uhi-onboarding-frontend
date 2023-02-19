export const validateAbhaNumber = (abhaNumber) => {
  const number = abhaNumber.trim().replace('-', '')
  // Regex for ABHA Number validation
  const regex = /^[0-9]{14}$/
  console.log(RegExp(regex).test(number))
  if (regex.test(number)) {
    return number
  }
  throw new Error('Invalid ABHA Number')
}

export const validatePhoneNumber = (phoneNumber) => {
  const number = phoneNumber.trim()
  // Regex for Phone Number validation
  const regex = /^[0-9]{10}$/
  if (RegExp(regex).test(number)) {
    return number
  }
  throw new Error('Invalid Phone Number')
}
