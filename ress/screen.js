class Screen{
	constructor(ID, bg, theme, action){
		this.ID = ID;
		this.bg = getImg(bg);
		this.theme = getAudio(theme);
		this.act = action;
		Helon.screens[ID] = this;
	}
	
	act(){};
	
	display(){
		Helon.ctx.drawImage(this.bg, 0, 0);
		loop(this.theme);
		this.act();
	}
}



function setScreen(ID){
	Helon.screen = Hellaxy.screens[ID];
}