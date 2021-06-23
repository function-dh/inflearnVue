module.exports = {
	publicPath: '/vue-notepad',
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