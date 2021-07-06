<template>
	<div class="TodoInput">
		<div class="inner">
			<!-- 텍스트 입력 창 -->
			<div class="input-box">
				<InputText :value="newTodoItem" @input="setData" @keypressEnter="addTodo" class="todo-input" placeholder="메모를 입력 해주세요" />
				<button @click="addTodo" class="add-container">
					<i class="btn-add fas fa-plus" aria-hidden="true"></i>
				</button>
			</div>
		</div>

		<!-- modal -->
    <Modal>
			<h3 slot="header">앗! 실수로 까먹으셨나요?</h3>
			<p slot="body">
				<i class="emoji" aria-label="당황하는 표정">😅</i>
				메모를 입력 해주세요!
			</p>
		</Modal>
	</div>
</template>

<script>
import { mapMutations } from 'vuex'
import InputText from '../common/InputText'
import Modal from '../common/Modal'

export default {
	data() {
		return {
			newTodoItem: '',
		}
	},
	methods: {
		...mapMutations('modal', ['toggleModal']),

		// 할일 추가 관련
		setData(txt){
			this.newTodoItem = txt
		},
		addTodo(){
			if (this.newTodoItem !== '') {
				this.$store.commit('todo/addTodoItem', this.newTodoItem)
				this.clearInput()
			} else{
				this.toggleModal()
			}
		},
		// 입력창 초기화
		clearInput(){
			this.newTodoItem = ''
		}
	},
	components:{
		InputText,
		Modal
	}
}
</script>

<style lang="scss" scoped>
	.TodoInput {
		height: 50px;
		.input-box{
			overflow: hidden;
			display: flex;
			box-shadow: 5px 5px 10px rgba(0,0,0,0.1);
			border-radius: 5px;
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