<template>
	<div>
		<input type="text" v-model="newTodoItem" name="" id="">
		<button @click="addTodo">add</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			newTodoItem: ''
		}
	},
	methods: {
		addTodo(){
			console.log(this.newTodoItem);
			this.newTodoItem = ''
		},
	},
}
</script>

<style>

</style>