<template>
	<div class="TodoHeader">
		<div class="inner">
			<h1 class="tit"><i class="tit-emoji" aria-label="메모장 이모지">🗓</i>메모장</h1>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.TodoHeader{
		padding: 40px 0;
		.tit{
			text-align: center;
			font-weight: 700;
			color: $POINT;
			.tit-emoji{
				display: inline-block;
				margin: 5px 4px 0 0;
				line-height: 1;
				font-style: normal;
				vertical-align: top;
			}
		}
	}
</style>