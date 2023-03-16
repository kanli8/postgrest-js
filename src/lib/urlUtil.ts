export const addSearchParamsByRegx = (url: string, params: Record<string, string>) => {
  const queryString = Object.keys(params)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&')
  const regex = /(\?.*)?$/
  url = url.replace(regex, `?${queryString}`)
}

export const getHostName = (url: string) => {
  const regex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+\.[^:\/\n]+)/g
  const match = regex.exec(url)
  return match && match[1]
}

export declare const uni: any
