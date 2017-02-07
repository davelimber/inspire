(function(){
	
	//Get your QuoteService

	var qs = this;
	var quoteService = new QuoteService();


		new Vue({
			el: '#quote',
			data:{
				quote: {}
			},
			mounted: function(){
				quoteService.getQuote(this.setQuote)
			},
			methods: {
				setQuote: function(quote){
					console.log(quote)
					this.quote= JSON.parse(quote)
					console.log(this.quote)
				}
			}
		})	
	
}())
