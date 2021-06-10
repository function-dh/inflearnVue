<template>
	<div>
		<ul v-for="(list, index) in todoItems" :key="index">
			<li>{{ list }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			todoItems : []
		}
	},
	created() {
		if(localStorage.length > 0 ){
			for(let i = 0; i < localStorage.length; i++){
				if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
					this.todoItems.push(localStorage.key(i))
				}
			}
		}
	},
}
</script>

<style>

</style>