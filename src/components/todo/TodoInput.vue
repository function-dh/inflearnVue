<template>
	<div class="TodoInput">
		<div class="inner">
			<!-- 텍스트 입력 창 -->
			<div class="input-box">
				<InputText :value="newTodoItem" @input="setData" @keypressEnter="addTodo" class="todo-input" placeholder="할 일을 입력해주세요" />
				<button @click="addTodo" class="add-container">
					<i class="btn-add fas fa-plus" aria-hidden="true"></i>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import InputText from '../common/InputText'

export default {
	data() {
		return {
			newTodoItem: '',
		}
	},
	methods: {
		// 할일 추가 관련
		setData(txt){
			this.newTodoItem = txt
		},
		addTodo(){
			if (this.newTodoItem !== '') {
				this.$store.commit('todo/addTodoItem', this.newTodoItem)
				this.clearInput()
			} else{
				console.log('모달 오픈');
			}
		},
		// 입력창 초기화
		clearInput(){
			this.newTodoItem = ''
		}
	},
	components:{
		InputText
	}
}
</script>

<style lang="scss" scoped>
	.TodoInput {
		height: 50px;
		border-radius: 5px;
		line-height: 50px;
		.input-box{
			display: flex;
			box-shadow: 5px 5px 10px rgba(0,0,0,0.1);
			.todo-input {
				width: 100%;
				padding: 0 10px;
				border: 0;
				&:focus{
					outline: 0;
				}
			}
			.add-container {
				flex: 0 0 50px;
				border-radius: 0 5px 5px 0;
				background: linear-gradient(to right, $POINT, #8763FB);
			}
			.btn-add {
				height: 50px;
				line-height: 50px;
				vertical-align: middle;
				color: #fff;
			}
		}
	}
</style>