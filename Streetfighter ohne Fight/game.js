//Spiel made by Felix & Timo
var config = {
	type: Phaser.AUTO,
	width: 1500,
	heigth: 1000,
	physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1000 },
            debug: false
        }
    },
	scene: {
		preload: preload,
		create: create,
		update: update
	}
};
//neues Spiel erzeugen
var game = new Phaser.Game(config);
var monster = {};
var agent = {};
var AKey
var LeftArrowKey
var DKey
var RightArrowKey
var WKey
var UpArrowKey
var SKey
var DownArrowKey
//
function preload(){
	this.load.image("Hintergrund", "HintergrundStadt.jpg");//Bild laden und bennenen
	this.load.image("PlayerONE", "P1neu.png");//Charakter 1 laden und bennenen
	this.load.image("PlayerTWO", "P2neu.png");//Charakter 2 laden und bennenen
	
}

//Beim erstellen des Spiels
function create(){
	this.physics.world.setBounds(-200,0,1870,644);
	var background = this.add.image(650, 500, "Hintergrund");
	background.scaleX=2
	background.scaleY=2
	agent = this.physics.add.image(100, 460, "PlayerONE");
	agent.setSize(80,60)
	agent.scaleX=3
	agent.scaleY=3
	agent.setCollideWorldBounds(true)
	monster = this.physics.add.image(500, 480, "PlayerTWO");
	monster.setSize(200,200)
	monster.scaleX=0.7
	monster.scaleY=0.7
	monster.setCollideWorldBounds(true)
	AKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
	// AKey.onDown=KeyDown;
	LeftArrowKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
	// LeftArrowKey.onDown=KeyDown;
	DKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
	// DKey.onDown=KeyDown;
	RightArrowKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
	// RightArrowKey.onDown=KeyDown;
	this.physics.add.collider(monster,agent)
	WKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
	UpArrowKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
	SKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
	DownArrowKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
}

//widerholt aufgerufen -> Spielschleife / Spiellogik
function update(){
	KeyDown();
}
function KeyDown(){
	if (AKey.isDown){AKeyDown()}
	if (LeftArrowKey.isDown){ArrowLeftDown()}
	if (DKey.isDown){DKeyDown()}
	if (RightArrowKey.isDown){ArrowRightDown()}
	if (WKey.isDown){WKeyDown()}
	if (UpArrowKey.isDown){ArrowUpDown()}
	if (SKey.isDown){SKeyDown()}
	if (DownArrowKey.isDown){ArrowDownDown()}
}
function  AKeyDown(){
	monster.x -= 10;
	monster.setFlipX(true);
	
}	
function  ArrowLeftDown(){
	agent.x -= 10;
	agent.setFlipX(true);
	
}
function DKeyDown(){
	monster.x += 10;
	monster.setFlipX(false);
}
function ArrowRightDown(){
	agent.x += 10;
	agent.setFlipX(false);
}
function WKeyDown(){
	monster.y -= 10;
}
function ArrowUpDown(){
	agent.y -=10;
}
function SKeyDown(){
	monster.y +=100;
}
function ArrowDownDown(){
	agent.y += 100
}