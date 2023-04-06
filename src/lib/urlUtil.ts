export const addSearchParamsByRegx = (url: string, params: Record<string, string>) => {
  // console.log('addSearchParamsByRegx-------> url = ', url)
  if (Object.keys(params).length === 0) {
    return url
  }
  const queryString = Object.keys(params)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&')

  var reg = /[?&]([^?&#]+)=([^?&#]+)/g

  var paramsStr = ''
  var ret = reg.exec(url)
  while (ret) {
    paramsStr += ret[1] + '=' + ret[2] + '&'
    ret = reg.exec(url)
  }

  paramsStr += queryString

  const regex = /(\?.*)?$/
  url = url.replace(regex, `?${paramsStr}`)
  // console.log('addSearchParamsByRegx-------> result = ', url)
  return url
}

export const getHostName = (url: string) => {
  const regex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+\.[^:\/\n]+)/g
  const match = regex.exec(url)
  return match && match[1]
}

export const getSearchParamsValueByName = (sUrl: string, sKey: string) => {
  sUrl = decodeURI(sUrl)
  if (sUrl.indexOf('?') === -1) return false

  const arr1 = sUrl.split('?')
  if (arr1.length >= 1) {
    const arr2 = arr1[1].split('&')
    for (let i = 0; i < arr2.length; i++) {
      const curArr = arr2[i].split('=')

      if (curArr[0] === sKey) {
        return curArr[1]
      }
    }
  }
}

export declare const uni: any
