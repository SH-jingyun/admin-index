import React from 'react'
import { Router, Route, IndexRoute, browserHistory/* , Redirect */ } from 'react-router'
// browserHistory
import { isLogin } from '@configs/common'

import * as base from '@pages/base' // 基础
import * as sysSet from '@pages/set' // 设置中心-系统设置

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={base.app} onEnter={isLogin}>
      <IndexRoute component={sysSet.user} />
      <Route path="/list" component={sysSet.user} />
      <Route path="/activity" component={sysSet.activity} />
      <Route path="/version" component={sysSet.version} />
      <Route path="/ad" component={sysSet.ad} />
      <Route path="/withdraw" component={sysSet.withdraw} />
      <Route path="/user" component={sysSet.user} />
      <Route path="/config/:type" component={sysSet.config} />
      <Route path="/gold/:id" component={sysSet.gold} />
    </Route>
    <Route path="/login" component={base.login} />
    <Route path="*" component={base.notfound} />
  </Router>
)
