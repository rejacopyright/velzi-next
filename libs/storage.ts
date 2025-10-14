import CryptoJS from 'crypto-js'

const SECRET_KEY = 'ssst'

export const encryptedStorage = {
  getItem: (key: string): any | null => {
    try {
      const encrypted = localStorage.getItem(key)

      if (!encrypted) return null

      const bytes = CryptoJS.AES.decrypt(encrypted, SECRET_KEY)
      const decrypted = bytes.toString(CryptoJS.enc.Utf8)

      return JSON.parse(decrypted)
    } catch {
      return null
    }
  },

  setItem: (key: string, value: any): void => {
    try {
      const json = JSON.stringify(value)
      const encrypted = CryptoJS.AES.encrypt(json, SECRET_KEY).toString()

      localStorage.setItem(key, encrypted)
    } catch {
      //
    }
  },

  removeItem: (key: string): void => {
    try {
      localStorage.removeItem(key)
    } catch {
      //
    }
  },
}
