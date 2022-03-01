import { AxiosResponse } from 'axios'
import code from '@/renderer/configs/code'
/**
 * 响应拦截
 * @param response { AxiosResponse }
 * 操作成功，返回 data.data
 * 操作失败，抛出 Error: data.errorMsg
 */
const responseSuccess = (response: AxiosResponse) => {
  const errorCode: number = response.data.code
  const { success } = code

  // 返回响应数据
  if (errorCode === success) {
    return response.data.data
  } else {
    // 控制台返回具体错误信息
    throw new Error(response.data.msg)
  }
}

export default responseSuccess
