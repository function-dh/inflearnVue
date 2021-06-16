<template>
	<input type="text" :value="value" @input="setText" @keypress.enter="keypressEnter">
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
		keypressEnter(){
			this.$emit('keypressEnter')
		}
	},
}
</script>

<style scoped>

</style>