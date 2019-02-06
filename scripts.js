// Interacting
// Zoom interaction
var body = document.querySelector('body')
var trigger = document.querySelector('.trigger')

trigger.addEventListener('click', zoom)

function zoom() {
	if (body.id != 'zoom') {
	body.id = 'zoom'
	} else {
		body.id = ''
	}
}
