// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Vuex from 'vuex'



Vue.config.productionTip = false


Vue.use(ElementUI)
Vue.use(Vuex)

let store = new Vuex.Store({
	state:{
		planList:[
		{
			label:"新增方案",
			name:"0"
		},
		{
			label:"默认巡查方案",
			name:'1'
		}]
	},
	getters:{
		getPlanList(state){
			return state.planList
		}

	},
	mutations:{
		addPlan(state,plan){
			state.planList.push(plan)
		},
		decreasePlan(state,plan){
			state.planList.array.forEach( function(element, index,array) {
				// statements
				if (plan.label == element.label) {
					// statement
					array.splice(index, 1)
					return;
				}
			});
		}
	},


	actions:{
		addPlan(context,plan){
			context.commit('addPlan',plan)
		},
		decreasePlan(context,plan){
			context.commit('decreasePlan',plan)
		},
		setRouteName(context,name){
			context.commit('setRouteName',name)
		}

	}

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:store,
  template: '<App/>',
  components: { App }
})
