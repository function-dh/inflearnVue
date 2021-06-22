// 할일 관련 모듈

// localStorage에서 메시지 호출
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

export default {
	namespaced : true,
	state : {
		todoItems : storage.fetch(),
	},
	getters : {
		storedTodoItems(state){
			return state.todoItems
		}
	},
	mutations: {
    // 새로운 할일 추가
    addTodoItem(state, newTodoItem){
			let overlapChk = false

			// 메모 텍스트 중복 체크
			state.todoItems.map(todo => {
				if(todo['item'] === newTodoItem){
					overlapChk = true
				}
			})

			if(overlapChk){
				alert('중복된 메모 입니다!')
				return
			} else{
				const obj = {
					completed : false,
					item : newTodoItem
				}
				state.todoItems.push(obj)
				localStorage.setItem(newTodoItem, JSON.stringify(obj))
			}
    },
		// 할일 삭제
		removeOneItem(state, payload){
			const {todo, index} = payload
			state.todoItems.splice(index, 1)
			localStorage.removeItem(todo.item)
		},
		// 할일 체크
		toggleOneItem(state, payload){
			const {todo, index} = payload
			state.todoItems[index].completed = !state.todoItems[index].completed

			// 로컬 스토리지 갱신 (기존 Key값 존재시 해당 key값 update)
			localStorage.setItem(todo.item, JSON.stringify(todo))
		},
		// 전체 삭제
		clearAll(state){
			state.todoItems = []
			localStorage.clear()
		}
	}
}