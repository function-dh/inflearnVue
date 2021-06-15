import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
	// localStorage에서 메시지 전달
	fetch(){
		const arr = []

		if(localStorage.length > 0 ){
			for(let i = 0; i < localStorage.length; i++){
				// local webpack 정보 들어가지 않게
				if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
					arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
				}
			}
		}
		return arr
	}
}

export const store = new Vuex.Store({
	state : {
		todoItems : storage.fetch()
	},
	mutations: {

	}
})