var Helon = {};
Helon.ress = {};
Helon.tics = 0;
Helon.muted = false;
Helon.ress.audio = {};
Helon.ress.images = {
	quantity : 0,
	loaded : 0
};
Helon.apps = [];
Helon.app = function(){ Helon.ctx.fillRect(0, 0, 1920, 1080);}
Helon.screens = [];
Helon.screen = new Screen();




Helon.listOptions = function(){
	if (Helon.apps.length === 0) console.log("No applications found! \nCheck your references!");
	for (var i = 0; i<Helon.apps.length; i++){
		console.log(i + ": " + Helon.apps[i].name);
	}
}



Helon.loop = function(){
	Helon.app();
	cursor.display();
	Helon.tics++;
	requestAnimationFrame(Helon.loop);
}



Helon.stop = function(){
	Helon.app = function(){};
};




Helon.exit = function(){
	Helon.loop = function(){};
};



Helon.load = function(slot){
	if (!exists(load)) load = 0;
	Helon.app = Helon.apps[slot].main;
	console.log("Application " + Helon.apps[slot].name + " started");
}



Helon.loadRess = function(){
	for (var i = 0; i < audibles.length; i++){
			Helon.ress.audio[audibles[i]] = new Audio("ress/audio/" + audibles[i] + ".mp3");
		}
	for (var a in images){
		Helon.ress.images.quantity += 1;
		Helon.ress.images[a] = new Image();
		Helon.ress.images[a].src = "ress/" + images[a] + "/" + a + ".png";
		Helon.ress.images[a].addEventListener("load",function(e){
			Helon.ress.images.loaded +=1;
		})
	}
}


Helon.showRess = function(){
	console.log(Helon.ress);
}



Helon.start = function(){
	Helon.ctx.fillRect(0, 0, 1920, 1080);
	Helon.ctx.fillStyle = "yellow";
	Helon.ctx.font = "32px Consolas";
	Helon.ctx.fillText("Helon Engine", 200, 600);
	Helon.ctx.fillStyle = "black";
	Helon.loadRess();
	setTimeout(loadCursor, 500);
	setTimeout(Helon.loop, 3000);
	
	if (Helon.apps.length != 0){
		Helon.app = function(){
			Helon.ctx.fillRect(0, 0, 1920, 1080);
			bar(80,400,1760,120,Helon.ress.images.loaded/Helon.ress.images.quantity);
			if (Helon.ress.images.quantity !== 0 && Helon.ress.images.loaded === Helon.ress.images.quantity) {
				console.log(Helon.ress.images);
				if (Helon.apps.length === 1){
					Helon.load();
				}
				else{
					alert("Multiple executables found! \nChoose one with Helon.load(slot) or view options with Helon.listApps() !");
				}
			}	
		}
	}
	else{
		alert("No executable Application found");
		Helon.loadRess();
	}
	
}
