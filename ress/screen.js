class Screen{
	constructor(ID, bg, theme, action){
		if (exists(ID)){
			this.ID = ID;
		}
		else{
			this.ID = "Nameless screen " + Helon.screens.length;
		}
		this.bg = getImg(bg);
		this.theme = getAudio(theme);
		if (exists(action)) this.act = action;
		Helon.screens[ID] = this;
	}
	
	act(){};
	
	set(){
		Helon.screen = this;
	}
	
	display(){
		Helon.ctx.drawImage(this.bg, 0, 0);
		loop(this.theme);
		this.act();
	}
}



function setScreen(ID){
	Helon.screen = Helon.screens[ID];
}