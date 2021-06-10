<template>
	<div class="TodoList-cont">
		<ul>
			<li v-for="(todo, index) in todoItems" :key="index" class="shadow" >
				<i :class="{checkBtnCompleted : todo.completed}" class="checkBtn fas fa-check" @click="toggleComplete(todo, index)"></i>
				<span :class="{textCompleted : todo.completed}">{{ todo.item }}</span>
				<span class="removeBtn" @click="removeTodo(todo.item, index)">
					<i class="fas fa-trash-alt"></i>
				</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
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
		removeTodo(todo, index){
			this.todoItems.splice(index, 1)
			localStorage.removeItem(todo)
		},
		toggleComplete(todo){
			todo.completed = !todo.completed

			// 로컬 스토리지 갱신 (update가 없어.. 삭제 후 재등록)
			localStorage.removeItem(todo.item)
			localStorage.setItem(todo.item, JSON.stringify(todo))
		},
	},
	created() {
		this.requestMessage()
	},
}
</script>

<style scoped>
	ul {
		list-style-type: none;
		padding-left: 0px;
		margin-top: 0;
		text-align: left;
	}
	li {
		display: flex;
		min-height: 50px;
		height: 50px;
		line-height: 50px;
		margin: 0.5rem 0;
		padding: 0 0.9rem;
		background: white;
		border-radius: 5px;
	}
	.checkBtn {
		line-height: 45px;
		color: #62acde;
		margin-right: 5px;
	}
	.checkBtnCompleted {
		color: #b3adad;
	}
	.textCompleted {
		text-decoration: line-through;
		color: #b3adad;
	}
	.removeBtn {
		margin-left: auto;
		color: #de4343;
	}
</style>