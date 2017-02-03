(function (){
	
	var wc = this;
	var weatherService = new WeatherService();


		new Vue({
			el: '#weather',
			data:{
				weather: {},
				celTemp: 0,
				fahTemp: 0
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
                    // console.log(this.fahTemp)
				}
			}
		})		


	
	
	
	
}())
