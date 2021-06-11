<template>
	<div class="inputBox shadow">
		<InputText v-model="newTodoItem" @addTodo="addTodo" />
		<button @click="addTodo" class="addContainer">
			<i class="addBtn fas fa-plus" aria-hidden="true"></i>
		</button>
	</div>
</template>

<script>
import InputText from './common/InputText'

export default {
	data() {
		return {
			newTodoItem: ''
		}
	},
	methods: {
		addTodo(){
			if (this.newTodoItem !== '') {
				this.$emit('addTodoItem', this.newTodoItem)
				this.clearInput()
			}
		},
		clearInput(){
			this.newTodoItem = ''
		}
	},
	components:{
		InputText
	}
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