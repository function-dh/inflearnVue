<template>
	<div class="TodoClear">
		<div class="inner">
			<button type="button" @click="clearTodo" class="btn-clear-all">전체 삭제</button>
		</div>
	</div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
	methods: {
		...mapMutations({
			clearTodo : 'todo/clearAll'
		})
	},
}
</script>

<style lang="scss" scoped>
	.TodoClear {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding-bottom: 16px;
		padding-bottom: calc(constant(safe-area-inset-bottom) + 16px);
    padding-bottom: calc(env(safe-area-inset-bottom) + 16px);
		text-align: center;
		background: $BACKGROUND;
		.btn-clear-all {
			width: 100%;
			padding: 16px 0;
			border-radius: 5px;
			font-weight: 700;
			color: $POINT_PURPLE;
			background: #fff;
		}
	}
</style>