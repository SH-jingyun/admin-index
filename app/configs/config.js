
export const set = 'set$'
export const brandName = 'jingYun' // slogan

// 开发环境默认配置
// 当前后台地址
let _baseURL = 'http://react.com'
// 后台接口
let _adminUrl = 'http://localhost:8002'
// 计步宝接口
let _walksURL = 'http://localhost:8003'
// 走路多多接口
let _zouUrl = 'http://localhost:8004'
// 慧眼探探接口
let _huiyanUrl = 'http://localhost:8005'
// 趣走路接口
let _qzlUrl = 'http://localhost:8006'
// 狗狗世界接口 弃用
let _dogsUrl = ''

if (process.env.NODE_ENV === 'production') {
  _baseURL = 'http://www.stepcounter.cn:8010'
  _adminUrl = 'https://ad.stepcounter.cn:8020'
  _walksURL = 'http://www.stepcounter.cn:8020'
  _zouUrl = 'http://www.zouluduoduo.cn:8020'
  _huiyanUrl = ''
  _qzlUrl = ''
  _dogsUrl = 'http://www.dogsworld.top:8020'
} else if (process.env.NODE_ENV === 'qa') {
  _baseURL = 'http://test.stepcounter.cn:8001'
  _adminUrl = 'http://test.stepcounter.cn:8002'
  _walksURL = 'http://test.stepcounter.cn:8003'
  _zouUrl = 'http://test.stepcounter.cn:8004'
  _huiyanUrl = 'http://test.stepcounter.cn:8005'
  _qzlUrl = 'http://test.stepcounter.cn:8006'
  // _dogsUrl = 'http://test.stepcounter.cn:8003'
}

export const path = ''
export const timeout = '15000' // 接口超时限制(ms)
export const baseURL = _baseURL
export const adminUrl = _adminUrl
export const walksURL = _walksURL
export const zouUrl = _zouUrl
export const huiyanUrl = _huiyanUrl
export const qzlUrl = _qzlUrl
export const dogsUrl = _dogsUrl
// 计步宝oss
export const walksOss = 'https://oss.stepcounter.cn/'
// 走路多多oss
export const zouOss = 'https://oss.zouluduoduo.cn/'
// 趣走路oss
export const qzlOss = 'https://oss-qzl.shpizarro.com/'
