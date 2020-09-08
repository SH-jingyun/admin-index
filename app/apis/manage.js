
import { createApi } from '@ajax'
import { walksURL, dogsUrl, adminUrl, zouUrl, reportUrl } from '@config'

const option = { baseURL: walksURL }

// 计步宝 开始
export const fetchReport = createApi(`${walksURL}/admin-index/list`); // 获取报表数据
// 用户
export const fetchUserList = createApi(`${walksURL}/admin-user/list`); // 获取用户列表
export const fetchUserDetail = createApi(`${walksURL}/admin-user/detail`, option); // 获取用户详情
export const fetchChangeUserGold = createApi(`${walksURL}/admin-user/change-gold`, option); // 修改用户金币
export const fetchGold = createApi(`${walksURL}/admin-user/gold`, option); // 获取用户金币明细
export const fetchChangeUserStatus = createApi(`${walksURL}/admin-user/change-status`, option); // 获取用户金币明细
export const fetchFeedback = createApi(`${walksURL}/admin-user/feedback`); // 获取用户反馈
export const fetchInvited = createApi(`${walksURL}/admin-user/invited`); // 获取用户邀请明细
export const fetchsdkError = createApi(`${walksURL}/admin-sdk/list`); // 获取三方错误码
// 活动
export const fetchActivity = createApi(`${walksURL}/admin-activity/list`) // 获取活动列表
export const fetchActivityDetail = createApi(`${walksURL}/admin-activity/detail`) // 获取活动详情
export const fetchActivityDetailUpdate = createApi(`${walksURL}/admin-activity/detail`) // 添加，更新活动详情
export const fetchConfig = createApi(`${walksURL}/admin-activity/config`)
export const fetchConfigDetail = createApi(`${walksURL}/admin-activity/config-detail`)
// 版本管理
export const fetchVersion = createApi(`${walksURL}/admin-version/list`) // 获取版本列表
export const fetchVersionDetail = createApi(`${walksURL}/admin-version/detail`) // 获取版本列表
export const fetchVersionAd = createApi(`${walksURL}/admin-version/ad-list`) // 获取版本列表
export const fetchVersionAdDetail = createApi(`${walksURL}/admin-version/ad-detail`) // 获取版本列表
// 运营位管理
export const fetchAd = createApi(`${walksURL}/admin-ad/list`)
export const fetchAdDetail = createApi(`${walksURL}/admin-ad/detail`)
// 提现管理
export const fetchWithdraw = createApi(`${walksURL}/admin-withdraw/list`)
export const fetchWithdrawAction = createApi(`${walksURL}/admin-withdraw/action`)
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
export const adApp = createApi(`${adminUrl}/admin/app/list`) // 获取app列表
export const adPostion = createApi(`${adminUrl}/admin/pos/list`) // 获取app列表
export const adPostionDetail = createApi(`${adminUrl}/admin/pos/details`) // 获取app列表
export const adUserGroup = createApi(`${adminUrl}/admin/user/group`) // 获取app列表
export const adCode = createApi(`${adminUrl}/admin/code/list`) // 获取app列表
export const adStrategy = createApi(`${adminUrl}/admin/strategy/list`) // 获取app列表
export const adStrategyDetail = createApi(`${adminUrl}/admin/strategy/details`) // 获取app列表
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

// 天气设置 开始
export const tqwUploadImg = createApi(`${adminUrl}/admin/tqw/img`)
// 天气设置 结束
