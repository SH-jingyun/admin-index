
import { createApi } from '@ajax'
import { mockURL, /* baseURL, */ path } from '@config'

const prefix = ''
const option = { baseURL: mockURL }


// 用户
export const fetchUserList = createApi(`${mockURL}/admin-user/list`) // 获取用户列表
export const fetchUserDetail = createApi(`${mockURL}/admin-user/detail`, option) // 获取用户详情

// 活动
export const fetchActivity = createApi(`${mockURL}/admin-activity/list`) // 获取活动列表
export const fetchActivityDetail = createApi(`${mockURL}/admin-activity/detail`) // 获取活动详情
export const fetchActivityDetailUpdate = createApi(`${mockURL}/admin-activity/detail`) // 添加，更新活动详情

// 版本管理
export const fetchVersion = createApi(`${mockURL}/admin-version/list`) // 获取版本列表
export const fetchVersionDetail = createApi(`${mockURL}/admin-version/detail`) // 获取版本列表

