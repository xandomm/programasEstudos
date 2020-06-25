import React from 'react'
import {Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dasboard/dashboard'
import BillingCycle from '../billingcycle/billingcycle'

export default props=>(
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard}/>
        <Route path='/billingcycles' component={BillingCycle}/>
        <Redirect from='*' to='/' />
    </Router>
)
