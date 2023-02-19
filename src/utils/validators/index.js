import { PHONE_REGEX, ABHA_REGEX } from '../../../constants'

export const validateAbhaNumber = (abhaNumber) => {
  const number = abhaNumber.trim().replace('-', '')
  // Regex for ABHA Number validation

  if ((RegExp(ABHA_REGEX).test(number))) {
    return number
  }
  throw new Error('Invalid ABHA Number')
}

export const validatePhoneNumber = (phoneNumber) => {
  const number = phoneNumber.trim()
  // Regex for Phone Number validation
  if (RegExp(PHONE_REGEX).test(number)) {
    return number
  }
  throw new Error('Invalid Phone Number')
}
