
export const set = 'set$'
export const brandName = 'jingYun' // slogan

// 开发环境默认配置
// 当前后台地址
let _baseURL = 'http://react.com'
// 计步宝接口
let _walksURL = 'http://localhost:8001'
// 狗狗世界接口
let _dogsUrl = 'http://localhost:8003'
// 广告系统接口
let _adUrl = 'http://localhost:8004'
// 走路多多接口
let _zouUrl = 'http://localhost:8005'
// report接口
let _reportUrl = 'http://localhost:8006'

if (process.env.NODE_ENV === 'production') {
  _baseURL = 'http://www.stepcounter.cn:8010'
  _walksURL = 'http://www.stepcounter.cn:8020'
  _dogsUrl = 'http://www.dogsworld.top:8020'
  _adUrl = 'http://ad.stepcounter.cn:8020'
  _zouUrl = 'http://www.zouluduoduo.cn:8020'
  _reportUrl = 'http://report.shpizarro.com:8080'
} else if (process.env.NODE_ENV === 'qa') {
  _baseURL = 'http://jytest.darkness.ltd:8002'
  _walksURL = 'http://jytest.darkness.ltd:8001'
  _dogsUrl = 'http://jytest.darkness.ltd:8003'
  _adUrl = 'http://jytest.darkness.ltd:8004'
  _zouUrl = 'http://jytest.darkness.ltd:8005'
  _reportUrl = 'http://report.shpizarro.com:8080'
}

export const path = ''
export const timeout = '15000' // 接口超时限制(ms)
export const baseURL = _baseURL
export const mockURL = _walksURL
export const dogsUrl = _dogsUrl
export const adUrl = _adUrl
export const zouUrl = _zouUrl
export const reportUrl = _reportUrl
// 计步宝oss
export const walksOss = 'https://oss.stepcounter.cn/'
// 走路多多oss
export const zouOss = 'https://oss.zouluoduoduo.cn/'
