<template>
	<div class="TodoList-cont">
		<ul>
			<li v-for="(todo, index) in propsData" :key="index" class="shadow" >
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
	props:{
		propsData : Array
	},
	methods: {
		removeTodo(todoItem, index){
			this.$emit('removeItem', todoItem, index)
		},
		toggleComplete(todo, index){
			this.$emit('toggleItem', todo, index)
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
</style>