declare const uni: any
interface FetchOptions extends Omit<RequestInit, 'body'> {
  data?: Record<string, unknown>
}

export function fetch(input: RequestInfo, options: RequestInit = {}): Promise<Response> {
  const { body, ...restOptions } = options
  // console.log('uniFetch---postgres-Fetch---', input, options)
  return new Promise((resolve, reject) => {
    uni.request({
      url: typeof input === 'string' ? input : input.url,
      method: restOptions.method || 'GET',
      data: body || {},
      header: {
        'Content-Type': 'application/json',
        ...restOptions.headers,
      },
      success: (res: any) => {
        resolve(new Response(res.data))
      },
      fail: (err: any) => {
        reject(new Error(`Request failed: ${err}`))
      },
    })
  })
}
