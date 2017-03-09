var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

context.lineWidth = 5;

var down = false; //mouse

canvas.addEventListener('mousemove', draw); //whenever mouse moves -> draw!!

function select(){
	canvas.addEventListener('mousemove', drawRect);

	canvas.addEventListener('mousedown', function(){
	down = true;
	context.beginPath();
	context.moveTo(xPos, yPos);	
	canvas.addEventListener("mousemove", drawRect);
});

}

canvas.addEventListener('mousedown', function(){
	down = true;
	context.beginPath();
	context.moveTo(xPos, yPos);	
	canvas.addEventListener("mousemove", draw);
});

canvas.addEventListener('mouseup', function(){
	down = false;
});

function drawRect(e){
	xPos = e.clientX - canvas.offsetLeft;
	yPos = e.clientY - canvas.offsetTop;

	if(down == true){
		context.rect(xPos, yPos);
		context.stroke();
	}
}

function draw(e){ //высчитываем
	xPos = e.clientX - canvas.offsetLeft;
	yPos = e.clientY - canvas.offsetTop;

	if(down == true){
		context.lineTo(xPos, yPos);
		context.stroke();
	}
}

function changeColor(color){
		context.strokeStyle = color;
}

function clearCanvas(){
	context.clearRect(0, 0, canvas.width, canvas.height);
}

function changeBrushSize(size){
	context.lineWidth = size;
}


function triggerClick(){
	document.getElementById('file').click();
}


document.getElementById('file').addEventListener('change', function(e){
	var temp = URL.createObjectURL(e.target.files[0]); //create url for file that will specify as its parametr
	var image = new Image();
	image.src = temp;

	image.addEventListener('load', function(){
		context.drawImage(image, 0, 0);
	})
});




