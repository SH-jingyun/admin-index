import React from 'react'
import { Router, Route, IndexRoute, browserHistory/* , Redirect */ } from 'react-router'
// browserHistory
import { isLogin } from '@configs/common'

import * as base from '@pages/base' // 基础
import * as sysSet from '@pages/set' // 计步宝
import * as dogs from '@pages/dogs' // 狗狗世界
import * as ad from '@pages/ad' // 广告系统
import * as zou from '@pages/zou' // 走路多多
import * as report from '@pages/report' // 报表系统
import * as tianqi from '@pages/tianqi' // 365天气
import * as qzl from '@pages/qzl' // 趣走路

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={base.app} onEnter={isLogin}>
      <IndexRoute component={sysSet.report} />
      {/* <IndexRoute component={tianqi.img} /> */}
      {/* 计步宝 */}
      <Route path="/index" component={sysSet.report} />
      <Route path="/list" component={sysSet.user} />
      <Route path="/activity" component={sysSet.activity} />
      <Route path="/version" component={sysSet.version} />
      <Route path="/ad" component={sysSet.ad} />
      <Route path="/withdraw" component={sysSet.withdraw} />
      <Route path="/user" component={sysSet.user} />
      <Route path="/config/:type" component={sysSet.config} />
      <Route path="/gold/:id" component={sysSet.gold} />
      <Route path="/version-ad" component={sysSet.versionAd} />
      <Route path="/feedback" component={sysSet.feedback} />
      <Route path="/sdk-error" component={sysSet.sdkError} />
      <Route path="/invited" component={sysSet.invited} />
      {/* 狗狗世界 */}
      <Route path="/dogs-version" component={dogs.version} />
      <Route path="/dogs-version-ad" component={dogs.versionAd} />
      <Route path="/dogs-interior" component={dogs.interior} />
      <Route path="/dogs-withdraw" component={dogs.withdraw} />
      <Route path="/dogs-user" component={dogs.user} />
      {/* 广告系统 */}
      <Route path="/ad-app" component={ad.app} />
      <Route path="/ad-position" component={ad.position} />
      <Route path="/ad-user-group" component={ad.userGroup} />
      <Route path="/ad-strategy" component={ad.strategy} />
      <Route path="/ad-code" component={ad.code} />
      <Route path="/ad-strategy-details/:id" component={ad.strategyDetails} />
      {/* 走路多多 */}
      <Route path="/zou-index" component={zou.report} />
      <Route path="/zou-list" component={zou.user} />
      <Route path="/zou-activity" component={zou.activity} />
      <Route path="/zou-version" component={zou.version} />
      <Route path="/zou-ad" component={zou.ad} />
      <Route path="/zou-withdraw" component={zou.withdraw} />
      <Route path="/zou-user" component={zou.user} />
      <Route path="/zou-config/:type" component={zou.config} />
      <Route path="/zou-gold/:id" component={zou.gold} />
      <Route path="/zou-version-ad" component={zou.versionAd} />
      <Route path="/zou-feedback" component={zou.feedback} />
      <Route path="/zou-sdk-error" component={zou.sdkError} />
      <Route path="/zou-invited" component={zou.invited} />
      {/* 报表 */}
      <Route path="/report-roi" component={report.roi} />
      {/* 天气 */}
      <Route path="/tian-img" component={tianqi.img} />
      {/* 趣走路 */}
      <Route path="/qzl-index" component={qzl.report} />
      <Route path="/qzl-list" component={qzl.user} />
      <Route path="/qzl-activity" component={qzl.activity} />
      <Route path="/qzl-version" component={qzl.version} />
      <Route path="/qzl-ad" component={qzl.ad} />
      <Route path="/qzl-withdraw" component={qzl.withdraw} />
      <Route path="/qzl-user" component={qzl.user} />
      <Route path="/qzl-config/:type" component={qzl.config} />
      <Route path="/qzl-gold/:id" component={qzl.gold} />
      <Route path="/qzl-version-ad" component={qzl.versionAd} />
      <Route path="/qzl-feedback" component={qzl.feedback} />
      <Route path="/qzl-sdk-error" component={qzl.sdkError} />
      <Route path="/qzl-invited" component={qzl.invited} />
    </Route>
    <Route path="/login" component={base.login} />
    <Route path="*" component={base.notfound} />
  </Router>
)
