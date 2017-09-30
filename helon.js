var Helon = {};
Helon.programs = {};
Helon.ress = {};
Helon.ress.audio = {};
Helon.ress.images = {
	quantity : 0,
	loaded : 0
};

Helon.task = function(){
	Helon.ctx.fillStyle = "black";
	Helon.ctx.fillRect(0, 0, 1280, 720);
	bar(Helon.ress.images);
}

Helon.start = function(){
	requestAnimationFrame(Helon.task);
}

window.onload = function(){
	var Canvas = document.getElementById("Canvas");
	Helon.ctx = Canvas.getContext("2d");
	
	Helon.ctx.fillRect(0, 0, 1280, 720);
	Helon.ctx.fillStyle = "yellow";
	Helon.ctx.font = "24px Consolas";
	Helon.ctx.fillText("Running on Helon Engine", 200, 400);
	setTimeout(Helon.start, 2000);
	
	for (var a in images){
		Helon.ress.images.quantity += 1;
		Helon.ress[a] = new Image();
		Helon.ress[a].src = "ress/images/" + images[a] + "/" + a + ".png";
		Helon.ress[a].addEventListener("load",function(e){
			Helon.ress.image.loaded +=1;
			if (Helon.ress.image.loaded === Helon.ress.image.quantity) {
				console.log(image.quantity,image.loaded);
				//Helon.task = ;
			}
		})
	}
	loadAudio();
}