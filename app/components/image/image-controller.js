(function () {

	//Your ImageService is a global constructor function what can you do here if you new it up?
	var is = this;
	var imageService = new ImageService();



	new Vue({
		el: '#img',
		data: {
			image: '',
			style: {
				backgroundimage: ''
				// background: '',
				//  'red'
			},
			img: ''
		},
		mounted: function () {
			imageService.getImage(this.imgGet)
			console.log('started')
		},
		methods: {
			imgGet: function (res) {
				console.log(res)
				this.image = JSON.parse(res).url
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