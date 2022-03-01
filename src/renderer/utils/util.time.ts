const time = {
  // 获取token
  getDatetime (value: string): string {
    const date = new Date(value)
    const y = date.getFullYear()

    let MM: any = date.getMonth() + 1
    MM = MM < 10 ? '0' + MM : MM

    let d: any = date.getDate()
    d = d < 10 ? '0' + d : d

    let h: any = date.getHours()
    h = h < 10 ? '0' + h : h

    let m: any = date.getMinutes()
    m = m < 10 ? '0' + m : m

    let s: any = date.getSeconds()
    s = s < 10 ? '0' + s : s

    return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s
  },
  // 设置token
  // setToken(value: string) {
  //   cache.sessionSet(TOKEN_KEY, value);
  // },

  // 时间戳转换函数
  formatDate (value: any): string {
    const date = new Date(value * 1000)
    const y = date.getFullYear()

    let MM: any = date.getMonth() + 1
    MM = MM < 10 ? '0' + MM : MM

    let d: any = date.getDate()
    d = d < 10 ? '0' + d : d

    let h: any = date.getHours()
    h = h < 10 ? '0' + h : h

    let m: any = date.getMinutes()
    m = m < 10 ? '0' + m : m

    return y + '-' + MM + '-' + d + ' ' + h + ':' + m
  },

  // 时间戳转换函数
  formatTime (value: any): string {
    const date = new Date(value)
    const y = date.getFullYear()

    let MM: any = date.getMonth() + 1
    MM = MM < 10 ? '0' + MM : MM

    let d: any = date.getDate()
    d = d < 10 ? '0' + d : d

    let h: any = date.getHours()
    h = h < 10 ? '0' + h : h

    let m: any = date.getMinutes()
    m = m < 10 ? '0' + m : m

    let s: any = date.getSeconds()
    s = s < 10 ? '0' + s : s

    return y + '年' + MM + '月' + d + '日' + ' ' + h + ':' + m + ':' + s
  },

  // 时间戳转换函数
  formatDateDot (value: any): string {
    const date = new Date(value)
    const y = date.getFullYear()

    let MM: any = date.getMonth() + 1
    MM = MM < 10 ? '0' + MM : MM

    let d: any = date.getDate()
    d = d < 10 ? '0' + d : d

    let h: any = date.getHours()
    h = h < 10 ? '0' + h : h

    let m: any = date.getMinutes()
    m = m < 10 ? '0' + m : m

    let s: any = date.getSeconds()
    s = s < 10 ? '0' + s : s

    return y + '.' + MM + '.' + d + ' ' + h + ':' + m + ':' + s
  }
}

export default time
