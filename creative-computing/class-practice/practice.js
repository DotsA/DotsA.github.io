document.addEventListener("mousemove" , 
	handleMouseMove)

function handleMouseMove(evt) {
	console.log(evt.pageX, evt.pageY)

	var x = evt.pageX / window.innerWidth * 255
	var y = evt.pageY / window.innerWidth * 255

	x = Math.round(x)
	y = Math.round(y)

	var rgbString = 
	"rgb(" + x + "," + y "," + "255)"

    console.log(rgbString)
    document.body.style.backgroundColor = rgbString
}