(function(){
	
	//Get your QuoteService

	var qs = this;
	var quoteService = new QuoteService();
// var x = quoteService.getQuote()
// console.log(x)

		new Vue({
			el: '#quote',
			data:{
				quote: {}
			},
			mounted: function(){
				quoteService.getQuote(this.setQuote)
				
				// console.log(this.quote)
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
