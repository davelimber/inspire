(function () {

	//Your ImageService is a global constructor function what can you do here if you new it up?
	var is = this;
	var imageService = new ImageService();



	new Vue({
		el: '#image',
		data: {
			image: []

		},
		mounted: function () {
			// imageService.getImage(this.imgSet)
			imageService.getImage(this.imgGet)
		
		},
		methods: {
			// imgSet: function (imageObj) {
			// 	console.log('got this for obj looking at large url', imageObj.large_url)
			
			// 	this.image = JSON.parse(imageObj).large_url
			// 	console.log('this is image now', this.image)
			// },
			imgGet: function (res) {
				console.log(res)
				// use JSONparse if http://bcw-getter.herokuapp.com/?url= in service
				this.image = JSON.parse(res).url
				// this.image = res.url
				
				console.log('after parse ', this.image)
				var bgImg = 'url(' + this.image + ')';
				console.log('background image ', bgImg)
				//needed jquery for proper formatting of image//
				$('body').css({ 'background-image': bgImg, 'background-size': 'cover', });
				console.log(this.image)
			}
		}
	})

} ())

// var img
// imageService.getImage(imgGet)

// function imgGet(res) {
// img = JSON.parse(res)
// console.log(img.url)
// setURL(img.url)
// }

// function setURL (x) {
// 	img = x;
// 	console.log(x)
// }