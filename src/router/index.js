import Vue from 'vue'
import Router from 'vue-router'
import informationPage from '../components/page/information'
import planPage from '../components/page/plan'
import statisticsPage from '../components/page/statistics'

import plan1 from '../components/plan/plan1'
// import plan2 from '../components/plan/plan2'
// import plan3 from '../components/plan/plan3'
// import plan4 from '../components/plan/plan4'
// import plan5 from '../components/plan/plan5'
// import plan6 from '../components/plan/plan6'
// import plan7 from '../components/plan/plan7'
// import plan8 from '../components/plan/plan8'
// import plan9 from '../components/plan/plan9'
// import plan10 from '../components/plan/plan10'


import newPlan from '../components/plan/newPlan'

import companyManager from '../components/information/companyManager'
import equipAcceptance from '../components/information/equipAcceptance'
import equipDistribute from '../components/information/equipDistribute'
import staffCheck from '../components/information/staffCheck'
import distributeDetails from '../components/information/distributeDetails'

import meterArea from '../components/statistics/meterArea'
import nowServicePlace from '../components/statistics/nowServicePlace'
import nowWorking from '../components/statistics/nowWorking'
import troubleArea from '../components/statistics/troubleArea'
import troubleType from '../components/statistics/troubleType'
import checkPath from '../components/statistics/checkPath'




Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
  {
    path:'/',
    redirect:'/plan/0'
  },

  {
    path:'/plan/0',
    name:'0',
    component:newPlan
  },
  {
    path:'/plan/1',
    name:'1',
    component:plan1
  },



  {
    path:'/information/companyManager',
    name:'companyManager',
    component:companyManager
  },
  {
    path:'/information/equipAcceptance',
    name:'equipAcceptance',
    component:equipAcceptance
  },
  {
    path:'/information/equipDistribute',
    name:'equipDistribute',
    component:equipDistribute
  },
  {
    path:'/information/distributeDetails',
    name:'distributeDetails',
    component:distributeDetails
  },
  {
    path:'/information/staffCheck',
    name:'staffCheck',
    component:staffCheck
  },
 
  

  {
    path:'/statistics/meterArea',
    name:'meterArea',
    component:meterArea
  },
  {
    path:'/statistics/nowServicePlace',
    name:'nowServicePlace',
    component:nowServicePlace
  },
  {
    path:'/statistics/nowWorking',
    name:'nowWorking',
    component:nowWorking
  },
  {
    path:'/statistics/troubleArea',
    name:'troubleArea',
    component:troubleArea
  },
  {
    path:'/statistics/troubleType',
    name:'troubleType',
    component:troubleType
  },
  {
    path:'/statistics/checkPath',
    name:'checkPath',
    component:checkPath
  },
  
  ]

  
})
