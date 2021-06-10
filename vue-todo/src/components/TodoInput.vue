<template>
	<div class="inputBox shadow">
		<input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
		<button @click="addTodo" class="addContainer">
			<i class="addBtn fas fa-plus" aria-hidden="true"></i>
		</button>
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
			if (this.newTodoItem !== '') {
				let obj = {
					completed : false,
					item : this.newTodoItem
				}
				localStorage.setItem(this.newTodoItem, JSON.stringify(obj))
				this.clearInput()
			}
		},
		clearInput(){
			this.newTodoItem = ''
		}
	},
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  height: 50px;
  border-radius: 5px;
  line-height: 50px;
  background: #fff;
}
.inputBox input {
	float: left;
	width: calc(100% - 3rem);
	height: 100%;
	margin: 0;
	padding: 0 10px;
  border-style: none;
  font-size: 0.9rem;
	box-sizing: border-box;
}
.addContainer {
  float: right;
  display: block;
  width: 3rem;
	padding: 0;
	border: 0;
  border-radius: 0 5px 5px 0;
  background: linear-gradient(to right, #6478FB, #8763FB);
}
.addBtn {
	height: 50px;
  line-height: 50px;
  vertical-align: middle;
  color: #fff;
}
</style>