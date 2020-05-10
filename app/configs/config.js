
export const set = 'set$'
export const brandName = 'jingYun' // slogan

// 开发环境默认配置
let _serverIp = 'http://react.com'
let _port = '80'
let _baseURL = `${_serverIp}:${_port}`
let _mockURL = 'http://localhost:8001'
let _httpsUrl = 'http://localhost:8001'
let _dogsUrl = 'http://localhost:8003'

if (process.env.NODE_ENV === 'production') {
  _serverIp = 'http://121.41.71.1'
  _port = '8010'
  _baseURL = `${_serverIp}:${_port}`
  _mockURL = 'http://121.41.71.1:8020'
  _httpsUrl = 'https://www.stepcounter.cn:4420'
  _dogsUrl = 'http://localhost:8003'
} else if (process.env.NODE_ENV === 'qa') {
  _serverIp = 'http://jytest.darkness.ltd'
  _port = '8002'
  _baseURL = `${_serverIp}:${_port}`
  _mockURL = 'http://jytest.darkness.ltd:8001'
  _httpsUrl = _mockURL
  _dogsUrl = 'http://jytest.darkness.ltd:8003'
}

export const serverIp = _serverIp
export const path = ''
export const timeout = '15000' // 接口超时限制(ms)
export const baseURL = _baseURL
export const mockURL = _mockURL
export const httpsUrl = _httpsUrl
export const dogsUrl = _dogsUrl
