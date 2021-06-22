module.exports = {
	publicPath: '/inflearnVue',
	outputDir: 'docs',
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