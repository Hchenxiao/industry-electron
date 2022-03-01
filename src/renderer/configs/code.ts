/**
 * 该文件主要用来配置请求接口返回的code
 * 如果有添加新的key 需要到@/fetch/axios/responseSuccess.ts进行添加相应逻辑
 * 目前只有当前key的逻辑,如无特殊情况，请勿要修改responseSuccess.ts逻辑
 * 如果不需要某个key 比如 returnCode:[]
 */

 type Dictionary<T> = { [key: string]: T };
 type ErrorCode = { [key: number]: string };

 interface ToAny {
   code: number[];
   name: string;
   params?: Dictionary<string>;
 }

 interface Code {
   success: number;
   noMsg: number[];
   toLogin: number[];
   returnCode: number[];
   toAny: ToAny[];
   errcode: ErrorCode;
 }

const code: Code = {
  // 成功的code码
  success: 0,
  // 不要返回错误信息的code码,不做任何处理
  noMsg: [],
  // 跳转到登录页面的code码
  toLogin: [10004],
  // 返回错误码的code码
  returnCode: [1024],
  // 跳转到其他页面的code码
  toAny: [
    {
      code: [6, 7],
      name: 'login',
      params: {} // ?可传可不传
    }
  ],
  errcode: {
  }
}

export default code
