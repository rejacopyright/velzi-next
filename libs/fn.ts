export const toSize = (bytes: number, decimals = 2): string => {
  if (bytes === 0 || !bytes) return '0 B'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  const size = parseFloat((bytes / Math.pow(k, i)).toFixed(dm))

  return `${size} ${sizes[i]}`
}
