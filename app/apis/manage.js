
import { createApi } from '@ajax'
import { mockURL, /* baseURL, */ path } from '@config'

const prefix = ''
const option = { baseURL: mockURL }


export const fetchReport = createApi(`${mockURL}/admin-index/list`); // 获取报表数据

// 用户
export const fetchUserList = createApi(`${mockURL}/admin-user/list`); // 获取用户列表
export const fetchUserDetail = createApi(`${mockURL}/admin-user/detail`, option); // 获取用户详情
export const fetchChangeUserGold = createApi(`${mockURL}/admin-user/change-gold`, option); // 修改用户金币
export const fetchGold = createApi(`${mockURL}/admin-user/gold`, option); // 获取用户金币明细


// 活动
export const fetchActivity = createApi(`${mockURL}/admin-activity/list`) // 获取活动列表
export const fetchActivityDetail = createApi(`${mockURL}/admin-activity/detail`) // 获取活动详情
export const fetchActivityDetailUpdate = createApi(`${mockURL}/admin-activity/detail`) // 添加，更新活动详情
export const fetchConfig = createApi(`${mockURL}/admin-activity/config`)
export const fetchConfigDetail = createApi(`${mockURL}/admin-activity/config-detail`)

// 版本管理
export const fetchVersion = createApi(`${mockURL}/admin-version/list`) // 获取版本列表
export const fetchVersionDetail = createApi(`${mockURL}/admin-version/detail`) // 获取版本列表
// 运营位管理
export const fetchAd = createApi(`${mockURL}/admin-ad/list`)
export const fetchAdDetail = createApi(`${mockURL}/admin-ad/detail`)

// 提现管理
export const fetchWithdraw = createApi(`${mockURL}/admin-withdraw/list`)
export const fetchWithdrawAction = createApi(`${mockURL}/admin-withdraw/action`)

