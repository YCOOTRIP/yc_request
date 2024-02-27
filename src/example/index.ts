import ycRequest from '@/service'
import { IDataType } from '@/service/types'
// 使用 Record<string, unknown> 类型代替 object类型

export function accountLoginRequest(data) {
  return ycRequest.post<IDataType<Record<string, unknown>>>({
    url: '/login',
    data
  })
}
export function requestUserInfoById(id: number) {
  return ycRequest.get<IDataType>({
    url: '/xxx' + id,
    showLoading: false
  })
}

export function getCategoryGoodsSale() {
  return ycRequest.get({
    url: '/ssx'
  })
}

export function getCategoryGoodsCount() {
  return ycRequest.get({
    url: '/home',
    interceptors: {
      // 单独的请求拦截(第三层拦截)
      requestInterceptor: (config) => {
        console.log('单独请求的config')
        return config
      },
      responseInterceptor: (res) => {
        console.log('单独响应的res')
        return res
      }
    }
  })
}
