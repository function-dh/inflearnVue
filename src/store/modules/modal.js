// modal 관련

export default {
	namespaced : true,
	state : {
		isModal : false,
	},
	mutations : {
		toggleModal(state){
			state.isModal = !state.isModal
		},
	}
}