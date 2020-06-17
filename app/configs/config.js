
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

if (process.env.NODE_ENV === 'production') {
  _baseURL = 'http://www.stepcounter.cn:8010'
  _walksURL = 'http://121.41.71.1:8020'
  _dogsUrl = 'http://www.dogsworld.top:8020'
  _adUrl = 'http://localhost:8004'
} else if (process.env.NODE_ENV === 'qa') {
  _baseURL = 'http://jytest.darkness.ltd:8002'
  _walksURL = 'http://jytest.darkness.ltd:8001'
  _dogsUrl = 'http://jytest.darkness.ltd:8003'
  _adUrl = 'http://localhost:8004'
}

export const path = ''
export const timeout = '15000' // 接口超时限制(ms)
export const baseURL = _baseURL
export const mockURL = _walksURL
export const dogsUrl = _dogsUrl
export const adUrl = _adUrl
// 计步宝oss
export const walksOss = 'https://oss.stepcounter.cn/'
