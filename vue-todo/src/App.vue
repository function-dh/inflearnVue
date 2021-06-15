<template>
  <div id="app">
    <TodoHeader />
    <TodoInput @addTodoItem="addOneItem" />
    <TodoList :propsData="todoItems" @removeItem="removeOneItem" @toggleItem="toggleOneItem" />
    <TodoFooter @clearAll="clearAllItems" />
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'

export default {
  name: 'App',
	data() {
		return {
			todoItems : []
		}
	},
  methods: {
    // localStorage에서 메시지 전달
		requestMessage(){
			if(localStorage.length > 0 ){
				for(let i = 0; i < localStorage.length; i++){
					// local webpack 정보 들어가지 않게
					if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
						this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
					}
				}
			}
		},
    // 새로운 할일 추가
    addOneItem(newTodoItem){
      const obj = {
        completed : false,
        item : newTodoItem
      }
      this.todoItems.push(obj)
      localStorage.setItem(newTodoItem, JSON.stringify(obj))
    },
    // 할일 삭제
    removeOneItem(todoItem, index){
      this.todoItems.splice(index, 1)
			localStorage.removeItem(todoItem)
    },
    // 할일 체크
    toggleOneItem(todo, index){
      this.todoItems[index].completed = !this.todoItems[index].completed

      // 로컬 스토리지 갱신 (기존 Key값 존재시 해당 key값 update)
      localStorage.setItem(todo.item, JSON.stringify(todo))
    },
    // 전체 삭제
    clearAllItems(){
      this.todoItems = []
			localStorage.clear()
    }
  },
  created() {
		this.requestMessage()
	},
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
  body{
    text-align: center;
    background-color: #f6f6f6;
  }
  input{
    width: 200px;
    border-style: groove;
  }
  button{
    border-style: groove;
  }
  body, input, textarea{
    font-family: 'Ubuntu', sans-serif;
    font-weight: 500;
  }
  .shadow{
    box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
  }
</style>
