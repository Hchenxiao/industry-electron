import Cookies from 'js-cookie'

const cookies = {
  /**
   * @description 存储 cookie 值
   * @param {String} name cookie name
   * @param {String} value cookie value
   * @param {Object} setting cookie setting
   */
  set (name = 'default', value = '', cookieSetting: object = {}) {
    const currentCookieSetting = {
      expires: 1
    }
    Object.assign(currentCookieSetting, cookieSetting)
    Cookies.set(
      `${process.env.VUE_APP_NAME}-${name}`,
      value,
      currentCookieSetting
    )
  },

  /**
   * @description 拿到 cookie 值
   * @param {String} name cookie name
   */
  get (name = 'default') {
    return Cookies.get(`${process.env.VUE_APP_NAME}-${name}`)
  },

  /**
   * @description 拿到 cookie 全部的值
   */
  getAll () {
    return Cookies.get()
  },

  /**
   * @description 删除 cookie
   * @param {String} name cookie name
   */
  remove (name = 'default') {
    return Cookies.remove(`${process.env.VUE_APP_NAME}-${name}`)
  }
}

export default cookies
