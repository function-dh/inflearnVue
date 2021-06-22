<template>
	<div class="inputBox shadow">
		<!-- 텍스트 입력 창 -->
		<InputText :value="newTodoItem" @input="setData" @keypressEnter="addTodo" />
		<button @click="addTodo" class="addContainer">
			<i class="addBtn fas fa-plus" aria-hidden="true"></i>
		</button>

		<!-- Modal 창 -->
		<Modal v-if="showModal">
      <h3 slot="header">
        경고
        <i class="closeModalBtn fa fa-times"
          aria-hidden="true"
          @click="showModal = false">
        </i>
      </h3>
      <p slot="body">할 일을 입력하세요.</p>
    </Modal>
	</div>
</template>

<script>
import InputText from './common/InputText'
import Modal from './common/Modal'

export default {
	data() {
		return {
			newTodoItem: '',
			showModal : false
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
				this.showModal = true
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
input:focus {
  outline: none;
}
.inputBox {
  height: 50px;
  border-radius: 5px;
  line-height: 50px;
  background: #fff;
	input {
		float: left;
		width: calc(100% - 3rem);
		height: 100%;
		margin: 0;
		padding: 0 10px;
		border-style: none;
		font-size: 0.9rem;
		box-sizing: border-box;
	}
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
.closeModalBtn{
	color: #42b983;
}
</style>