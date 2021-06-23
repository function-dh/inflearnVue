<template>
	<div class="TodoList">
		<div class="inner">
			<transition-group name="list" tag="ul" class="todo-list">
				<li v-for="(todo, index) in this.todoItems" :key="todo.item" :class="{textCompleted : todo.completed}">
					<button type="button" @click="toggleComplete({todo, index})" class="btn-check fas fa-check" aria-label="완료된 메모 체크" />
					<span class="txt">{{ todo.item }}</span>
					<button @click="removeTodo({todo, index})" class="btn-remove" aria-label="메모 삭제">
						<i class="fas fa-trash-alt"></i>
					</button>
				</li>
			</transition-group>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
	computed : {
		...mapGetters({
			todoItems : 'todo/storedTodoItems'
		})
	},
	methods: {
		...mapMutations({
			removeTodo : 'todo/removeOneItem',
			toggleComplete : 'todo/toggleOneItem'
		}),
	},
}
</script>

<style lang="scss" scoped>
	.TodoList{
		padding-bottom: 64px;
		.todo-list{
			overflow-x: hidden;
			overflow-y: auto;
			margin: 12px 0 0;
			padding: 0 0 15px;
			> li{
				display: flex;
				margin: 12px 0 0;
				padding: 13px 12px;
				border-radius: 5px;
				box-shadow: 5px 5px 10px rgba(0,0,0,0.1);
				background: #fff;
				&:first-child{
					margin: 0;
				}
				&.textCompleted{
					.btn-check {
						color: $DISABLED_DEFAULT;
					}
					.txt{
						text-decoration: line-through;
						color: $DISABLED_DEFAULT;
					}
				}
				.btn-check {
					display: block;
					margin-right: 12px;
					line-height: 1;
					color: $POINT;
				}
				.txt{
					@include ellipsis();
					width: 100%;
				}
				.btn-remove {
					display: block;
					margin-left: 12px;
					line-height: 1;
					color: $POINT_PURPLE;
				}
			}
		}
	}

	/* 리스트 아이템 transition css */
	.list-enter-active, .list-leave-active {
		transition: all 1s;
	}
	.list-enter, .list-leave-to {
		opacity: 0;
		transform: translateX(30px);
	}
</style>