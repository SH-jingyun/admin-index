
import { createApi } from '@ajax'
import { mockURL, dogsUrl, adUrl, zouUrl, reportUrl } from '@config'

const option = { baseURL: mockURL }

// 计步宝 开始
export const fetchReport = createApi(`${mockURL}/admin-index/list`); // 获取报表数据
// 用户
export const fetchUserList = createApi(`${mockURL}/admin-user/list`); // 获取用户列表
export const fetchUserDetail = createApi(`${mockURL}/admin-user/detail`, option); // 获取用户详情
export const fetchChangeUserGold = createApi(`${mockURL}/admin-user/change-gold`, option); // 修改用户金币
export const fetchGold = createApi(`${mockURL}/admin-user/gold`, option); // 获取用户金币明细
export const fetchChangeUserStatus = createApi(`${mockURL}/admin-user/change-status`, option); // 获取用户金币明细
export const fetchFeedback = createApi(`${mockURL}/admin-user/feedback`); // 获取用户反馈
export const fetchInvited = createApi(`${mockURL}/admin-user/invited`); // 获取用户邀请明细
export const fetchsdkError = createApi(`${mockURL}/admin-sdk/list`); // 获取三方错误码
// 活动
export const fetchActivity = createApi(`${mockURL}/admin-activity/list`) // 获取活动列表
export const fetchActivityDetail = createApi(`${mockURL}/admin-activity/detail`) // 获取活动详情
export const fetchActivityDetailUpdate = createApi(`${mockURL}/admin-activity/detail`) // 添加，更新活动详情
export const fetchConfig = createApi(`${mockURL}/admin-activity/config`)
export const fetchConfigDetail = createApi(`${mockURL}/admin-activity/config-detail`)
// 版本管理
export const fetchVersion = createApi(`${mockURL}/admin-version/list`) // 获取版本列表
export const fetchVersionDetail = createApi(`${mockURL}/admin-version/detail`) // 获取版本列表
export const fetchVersionAd = createApi(`${mockURL}/admin-version/ad-list`) // 获取版本列表
export const fetchVersionAdDetail = createApi(`${mockURL}/admin-version/ad-detail`) // 获取版本列表
// 运营位管理
export const fetchAd = createApi(`${mockURL}/admin-ad/list`)
export const fetchAdDetail = createApi(`${mockURL}/admin-ad/detail`)
// 提现管理
export const fetchWithdraw = createApi(`${mockURL}/admin-withdraw/list`)
export const fetchWithdrawAction = createApi(`${mockURL}/admin-withdraw/action`)
// 计步宝 结束

// 狗狗世界 开始
// 版本信息
export const dogsVersion = createApi(`${dogsUrl}/admin/version/list`) // 获取版本列表
export const dogsVersionDetail = createApi(`${dogsUrl}/admin/version/detail`) // 获取版本列表
export const dogsVersionAd = createApi(`${dogsUrl}/admin/version/adList`) // 获取版本列表
export const dogsVersionAdDetail = createApi(`${dogsUrl}/admin/version/adDetail`) // 获取版本列表

export const fetchInterior = createApi(`${dogsUrl}/admin/user/interior`) // 获取内部用户列表
export const fetchInteriorAdd = createApi(`${dogsUrl}/admin/user/interiorAdd`) // 添加内部用户
export const dogsWithdraw = createApi(`${dogsUrl}/admin/user/withdraw`) // 获取内部用户列表
export const dogsWithdrawAction = createApi(`${dogsUrl}/admin/user/withdrawAction`) // 添加内部用户
export const dogsUserList = createApi(`${dogsUrl}/admin/user/list`) // 获取用户列表
// 狗狗世界 结束

// 广告系统 开始
export const adApp = createApi(`${adUrl}/admin/app/list`) // 获取app列表
export const adPostion = createApi(`${adUrl}/admin/pos/list`) // 获取app列表
export const adPostionDetail = createApi(`${adUrl}/admin/pos/details`) // 获取app列表

export const adUserGroup = createApi(`${adUrl}/admin/user/group`) // 获取app列表
export const adCode = createApi(`${adUrl}/admin/code/list`) // 获取app列表
export const adStrategy = createApi(`${adUrl}/admin/strategy/list`) // 获取app列表
export const adStrategyDetail = createApi(`${adUrl}/admin/strategy/details`) // 获取app列表

// 广告系统 结束

// 走路多多 开始
export const zouReport = createApi(`${zouUrl}/admin-index/list`); // 获取报表数据
// 用户
export const zouUserList = createApi(`${zouUrl}/admin-user/list`); // 获取用户列表
export const zouUserDetail = createApi(`${zouUrl}/admin-user/detail`, option); // 获取用户详情
export const zouChangeUserGold = createApi(`${zouUrl}/admin-user/change-gold`, option); // 修改用户金币
export const zouGold = createApi(`${zouUrl}/admin-user/gold`, option); // 获取用户金币明细
export const zouChangeUserStatus = createApi(`${zouUrl}/admin-user/change-status`, option); // 获取用户金币明细
export const zouFeedback = createApi(`${zouUrl}/admin-user/feedback`); // 获取用户反馈
export const zouInvited = createApi(`${zouUrl}/admin-user/invited`); // 获取用户邀请明细
export const zousdkError = createApi(`${zouUrl}/admin-sdk/list`); // 获取三方错误码
// 活动
export const zouActivity = createApi(`${zouUrl}/admin-activity/list`) // 获取活动列表
export const zouActivityDetail = createApi(`${zouUrl}/admin-activity/detail`) // 获取活动详情
export const zouActivityDetailUpdate = createApi(`${zouUrl}/admin-activity/detail`) // 添加，更新活动详情
export const zouConfig = createApi(`${zouUrl}/admin-activity/config`)
export const zouConfigDetail = createApi(`${zouUrl}/admin-activity/config-detail`)
// 版本管理
export const zouVersion = createApi(`${zouUrl}/admin-version/list`) // 获取版本列表
export const zouVersionDetail = createApi(`${zouUrl}/admin-version/detail`) // 获取版本列表
export const zouVersionAd = createApi(`${zouUrl}/admin-version/ad-list`) // 获取版本列表
export const zouVersionAdDetail = createApi(`${zouUrl}/admin-version/ad-detail`) // 获取版本列表
// 运营位管理
export const zouAd = createApi(`${zouUrl}/admin-ad/list`)
export const zouAdDetail = createApi(`${zouUrl}/admin-ad/detail`)
// 提现管理
export const zouWithdraw = createApi(`${zouUrl}/admin-withdraw/list`)
export const zouWithdrawAction = createApi(`${zouUrl}/admin-withdraw/action`)
// 走路多多 结束

// 系统报表 开始
export const reportRoi = createApi(`${reportUrl}/admin/report/roi`)
// 系统报表 结束
