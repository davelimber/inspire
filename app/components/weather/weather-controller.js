(function (){
	
	var wc = this;
	var weatherService = new WeatherService();


		new Vue({
			el: '#weather',
			data:{
				weather: {},
				celTemp: 0,
				fahTemp: 0,
				active: false,
				displayTemp: 0,
				degrees: '',
			},
			mounted: function(){
				weatherService.getWeather(this.setWeather)
			},
			methods: {
				setWeather: function(weather){
					console.log('this is the weather ', weather.main.temp)
					this.weather = weather;
					this.fahTemp = (this.weather.main.temp * 9 / 5 - 459.67).toFixed(0)
					this.celTemp = (this.weather.main.temp - 273.15).toFixed(1)
					this.displayTemp = this.fahTemp;
					this.degrees = 'F';
				},
				toggleTemp() {
					this.active = ! this.active;
					this.setTemp();
				},
				setTemp() {
					if (this.active) {
						this.displayTemp = this.fahTemp;
						this.degrees = 'F';
					} else {this.displayTemp = this.celTemp;
						this.degrees = 'C';}
				}
			}
		})		


	
	
	
	
}())
