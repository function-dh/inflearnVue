import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// localStorage에서 메시지 전달
const storage = {
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
    // 새로운 할일 추가
    addTodoItem(state, newTodoItem){
      const obj = {
        completed : false,
        item : newTodoItem
      }
      state.todoItems.push(obj)
      localStorage.setItem(newTodoItem, JSON.stringify(obj))
    },
		// 할일 삭제
		removeOneItem(state, payload){
			const {...item} = payload
			state.todoItems.splice(item.index, 1)
			localStorage.removeItem(item.todoItem)
		},
		// 할일 체크
		toggleOneItem(state, payload){
			const {...item} = payload
			state.todoItems[item.index].completed = !state.todoItems[item.index].completed

			// 로컬 스토리지 갱신 (기존 Key값 존재시 해당 key값 update)
			localStorage.setItem(item.todo.item, JSON.stringify(item.todo))
		},
		// 전체 삭제
		clearAll(state){
			state.todoItems = []
			localStorage.clear()
		}
	}
})