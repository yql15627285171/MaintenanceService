import Vue from 'vue'
import Router from 'vue-router'
import informationPage from '../components/page/information'
import planPage from '../components/page/plan'
import statisticsPage from '../components/page/statistics'

import defaultPlan from '../components/plan/defaultPlan'
import planA from '../components/plan/planA'
import planB from '../components/plan/planB'
import planC from '../components/plan/planC'
import tempPlan from '../components/plan/tempPlan'
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




Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
  {
    path:'/',
    redirect:'/plan'
  },
  {
    path:'/plan',
    name:"plan",
    component:planPage,
    redirect:'/plan/defaultPlan',
    children:[
    {
      path:'/plan/defaultPlan',
      name:'defaultPlan',
      component:defaultPlan
    },
    {
      path:'/plan/planA',
      name:'planA',
      component:planA
    },
    {
      path:'/plan/planB',
      name:'planB',
      component:planB
    },
     {
      path:'/plan/planC',
      name:'planC',
      component:planC
    },
    {
      path:'/plan/tempPlan',
      name:'tempPlan',
      component:tempPlan
    },
    {
      path:'/plan/newPlan',
      name:'newPlan',
      component:newPlan
    }

    ]
  },

  {
  	path:'/information',
  	name:"information",
  	component:informationPage,
    redirect:'/information/companyManager',
    children:[
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
    },]
  },
  
  {
  	path:'/statistics',
  	name:"statistics",
  	component:statisticsPage,
    redirect:'/statistics/meterArea',
    children:[
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
    },]
  }
  ]
})
