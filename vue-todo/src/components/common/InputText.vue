<template>
	<input type="text" :value="value" @input="setText" @keyup.enter="keyupEnter">
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
		keyupEnter(){
			this.$emit('keyupEnter')
		}
	},
}
</script>

<style scoped>

</style>