module.exports = {
	css : {
		loaderOptions : {
			sass : {
        additionalData: `
          @import "@/assets/scss/abstracts/abstracts.scss";
        `
			}
		}
	}
}