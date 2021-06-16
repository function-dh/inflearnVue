<template>
	<div class="TodoList-cont">
		<transition-group name="list" tag="ul">
			<li v-for="(todo, index) in this.$store.state.todoItems" :key="todo.item" class="shadow" >
				<i :class="{checkBtnCompleted : todo.completed}" class="checkBtn fas fa-check" @click="toggleComplete(todo, index)"></i>
				<span :class="{textCompleted : todo.completed}">{{ todo.item }}</span>
				<span class="removeBtn" @click="removeTodo(todo.item, index)">
					<i class="fas fa-trash-alt"></i>
				</span>
			</li>
		</transition-group>
	</div>
</template>

<script>
export default {
	methods: {
		removeTodo(todoItem, index){
			this.$store.commit('removeOneItem', {todoItem, index})
		},
		toggleComplete(todo, index){
			this.$store.commit('toggleOneItem', {todo, index})
		},
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

	/* 리스트 아이템 transition css */
	.list-enter-active, .list-leave-active {
		transition: all 1s;
	}
	.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
		opacity: 0;
		transform: translateY(30px);
	}
</style>