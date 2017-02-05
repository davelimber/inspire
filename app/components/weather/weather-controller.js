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
					this.weather = JSON.parse(weather);
					// console.log('weather data')
					// console.log(this.weather.main.temp)
					this.fahTemp = (this.weather.main.temp * 9 / 5 - 459.67).toFixed(0)
					this.celTemp = (this.weather.main.temp - 273.15).toFixed(1)
					this.displayTemp = this.fahTemp;
					this.degrees = 'F';
                    // console.log(this.fahTemp)
				},
				toggleTemp() {
					this.active = ! this.active;
					// console.log('toggle ',this.active)
					this.setTemp();
				},
				setTemp() {
					// console.log('in setTemp ', this.active)
					if (this.active) {
						this.displayTemp = this.fahTemp;
						this.degrees = 'F';
					} else {this.displayTemp = this.celTemp;
						this.degrees = 'C';}
				}
			}
		})		


	
	
	
	
}())
