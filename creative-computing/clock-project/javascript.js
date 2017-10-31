function updateTime() {

	var clockHolder = document.getElementById("clock")
	var body = document.getElementById("body")
	var backcolor = document.getElementById("background-color")
	

	var now = new Date()
	var seconds = now.getSeconds()
	var minutes = now.getMinutes()
	var hours = now.getHours()
	

	now = now.toTimeString()
        

    clockHolder.setAttribute("src", seconds + "c.jpg");
    

       if (minutes > 1) {
	    clockHolder.style.color = "blue";
     	//change image	
	    }

	    else if (true) { 
       clockHolder.style.color = "pink"
	   }

	clockHolder.innerHTML = now
}

setInterval(updateTime,1000)