

var first = document.getElementById("circle");
first.addEventListener("mousemove", circl );

function circl(event) {
    var circle = document.getElementById("circle")
    var bub = document.createElement("div")
    circle.appendChild(bub)
    // var a = parseInt(Math.random()*100)+155,
    // 	b = Math.ceil(Math.random()*55)+200,
    // 	c = Math.ceil(Math.random()*55)+200
     var a = parseInt(Math.random()*255),
    	b = Math.ceil(Math.random()*255),
    	c = Math.ceil(Math.random()*255)



    bub.style.background ='rgb('+ a + ','+b+','+c+')'
    bub.style.top = (event.clientY-10)+"px"
    bub.style.left = (event.clientX-10)+"px"
	var size = parseInt(Math.random()*40)
    bub.style.height = size+'px'
	bub.style.width = size+'px'


	var y = event.clientY-10,
		x = event.clientX-10

	var id = setInterval(frame, 17);

	var xAxis1 = parseInt(Math.random()*12),
    	yAxis1 = parseInt(Math.random()*12),
    	xAxis2 = parseInt(Math.random()*12),
    	yAxis2 = parseInt(Math.random()*12),
    	transx = 0,
    	transy = 0,
    	deg = 0,
    	half = size/2

	function frame(){
			if(size==0){
				circle.removeChild(bub)
				clearInterval(id)
			}
			transx += xAxis1-xAxis2
			transy += yAxis1-xAxis2
			if(size==half){
				if (transx>0) {
				transx += parseInt(Math.random()*20)
				}else if(transx<0){
				transx += parseInt(Math.random()*-20)
				}
				if (transy>0) {
		    	transy += parseInt(Math.random()*20)
				}else if(transy<0)
		    	transy += parseInt(Math.random()*-20)
			}
			size--
			deg+=10
			bub.style.height = size+'px'
			bub.style.width = size+'px'
			bub.style.transform = 'translate( '+transx+'px,'+ transy +'px) rotate('+  deg+'deg)'
    }
}


var second = document.getElementById("box");
second.addEventListener("mousemove", myBox );

function myBox(event) {

    var box = document.getElementById("box")
    var square = document.createElement("div")
    box.appendChild(square)

    var a = parseInt(Math.random()*255),
    	b = Math.ceil(Math.random()*155)+100,
    	c = Math.ceil(Math.random()*155)+100

    var y = event.clientY-10,
		x = event.clientX-10

    square.style.background ='rgb('+ a + ','+255+','+255+')'
    square.style.top = y+"px"
    square.style.left = x+"px"

    var size = parseInt(Math.random()*50)
    square.style.height = size+'px'
	square.style.width = size+'px'

	var id = setInterval(frame, 17);

	var deg=0

	var xAxis1 = parseInt(Math.random()*10),
    	yAxis1 = parseInt(Math.random()*10),
    	xAxis2 = parseInt(Math.random()*10),
    	yAxis2 = parseInt(Math.random()*10),
    	transx = 0,
    	transy = 0
	function frame(){
			if(size==0){
				box.removeChild(square)
				clearInterval(id)
			}
			size--
			deg+=6
			transx += xAxis1-xAxis2
			transy += yAxis1-xAxis2
			square.style.height = size+'px'
			square.style.width = size+'px'
			square.style.transform = 'translate( '+transx+'px,'+ transy +'px) rotate('+  deg+'deg)'

    }


}


var triangle = document.getElementById("triangle");
triangle.addEventListener("mousemove", myTriangle );

function myTriangle(event) {
	// var wind = window.open()
	// wind.document.writeln('<!DOCTYPE html>')
	// wind.document.writeln('<html lang="en">')
	// wind.document.writeln('<head><title></title></')
	// wind.document.writeln('<body>')
	// wind.document.writeln("<h3>H1 text</h3>")
	// wind.document.writeln('</body>')
	// wind.document.title="bv"
	// wind.document.close()
    var box = document.getElementById("triangle")

    var triangle = document.createElement("div")
    box.appendChild(triangle)


    var a = parseInt(Math.random()*255),
    	b = Math.ceil(Math.random()*255),
    	c = Math.ceil(Math.random()*255)

    var y = event.clientY-40,
		x = event.clientX-40

    triangle.style.top = y+"px"
    triangle.style.left = x+"px"

	var id = setInterval(frame, 20);

	var size = parseInt(Math.random()*50)+20

	var bg = 50,
		deg = 0,
		line1=size/2,
		line2=size
	var xAxis1 = parseInt(Math.random()*10),
    	yAxis1 = parseInt(Math.random()*10),
    	xAxis2 = parseInt(Math.random()*10),
    	yAxis2 = parseInt(Math.random()*10),
    	transx = 0,
    	transy = 0

	function frame(){
			if(bg==0){
				box.removeChild(triangle)
				clearInterval(id)
			}				
			transx += xAxis1-xAxis2
			transy += yAxis1-xAxis2
			bg--
			deg+=7
			line1--
			line2-=2
			triangle.style.borderLeft = line1 + 'px solid rgba(0,0,0,0)'
			triangle.style.borderRight = line1 + 'px solid rgba(0,0,0,0)'
			triangle.style.borderBottom= line2 + 'px solid rgb('+a+','+b+','+c+')'
			triangle.style.transform = 'translate( '+transx+'px,'+ transy +'px) rotate('+  deg+'deg)'
    }
}


var hearts = document.getElementById("hearts");
hearts.addEventListener("mousemove", myHear );

function myHear(event) {
	var hear = document.getElementById("hearts")

    var heart = document.createElement("div")
    hear.appendChild(heart)
    heart.id='heart'


    var a = parseInt(Math.random()*255),
    	b = Math.ceil(Math.random()*255),
    	c = Math.ceil(Math.random()*255)
   // document.querySelector("#heart:before").style.background = 'rgb('+ a + ','+b+','+c+')' 
    //heart.style.before.background = 'rgb('+ a + ','+b+','+c+')'
    //heart.style.after.background = 'rgb('+ a + ','+b+','+c+')'
    //heart.style.background = 'rgb('+ a + ','+b+','+c+')'

    var y = event.clientY-40,
		x = event.clientX-40

    heart.style.top = y+"px"
    heart.style.left = x+"px"

	var id = setInterval(frame, 20);

	var size = parseInt(Math.random()*50)+20

	var bg = 50,
		deg = 0,
		line1=size/2,
		line2=size
	var xAxis1 = parseInt(Math.random()*10),
    	yAxis1 = parseInt(Math.random()*10),
    	xAxis2 = parseInt(Math.random()*10),
    	yAxis2 = parseInt(Math.random()*10),
    	transx = 0,
    	transy = 0

	function frame(){
			if(bg==0){
				hear.removeChild(heart)
				clearInterval(id)
			}				
			transx += xAxis1-xAxis2
			transy += yAxis1-xAxis2
			bg--
			deg+=7
			line1--
			line2-=2
			// heart.style.borderLeft = line1 + 'px solid rgba(0,0,0,0)'
			// heart.style.borderRight = line1 + 'px solid rgba(0,0,0,0)'
			// heart.style.borderBottom= line2 + 'px solid rgb('+a+','+b+','+c+')'
			 heart.style.transform = 'translate( '+transx+'px,'+ transy +'px) rotate('+  deg+'deg)'
    }
}



