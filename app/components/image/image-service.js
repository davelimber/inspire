function ImageService() {
	var url = 'https://bcw-getter.herokuapp.com/?url=';
	var url2 = 'https://www.splashbase.co/api/v1/images/random'
	// var apiUrl = url + encodeURIComponent(url2);
var apiUrl = url2;

	this.getImage = function (callWhenDone) {
		// ^^^^^^^ How do you use this?
		$.get(apiUrl, function (res) {
			// console.log('Image Data:', res)
			//What are you going to do with the image that comes back?
			console.log('got this for res', res)
			callWhenDone(res);
		})
	}
}
