import { AxiosRequestConfig } from 'axios'
import cookies from '@/renderer/utils/util.cookies'

const requestSuccess = (request: AxiosRequestConfig): AxiosRequestConfig => {
  const TOKEN_KEY = 'token'
  // const accessToken = auth.getToken();
  const accessToken = cookies.get('accessToken')
  if (accessToken) {
    request.headers = request.headers || {}
    request.headers[TOKEN_KEY] = accessToken
  }

  return request
}

export default requestSuccess
