<template>
	<input type="text" :value="value" @input="setText" @keyup.enter="addText">
</template>

<script>
export default {
	props:{
		value : String
	},
	methods: {
		setText(event){
			this.$emit('input', event.target.value)
		},
		addText(){
			this.$emit('addTodo')
		}
	},
}
</script>

<style scoped>

</style>