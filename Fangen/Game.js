var config = {
type: Phaser.AUTO,
width: 1350,
heigth: 600,
scene: {
    	preload: preload,
    	create: create,
    	update: update
	}
};


var game = new Phaser.Game(config);
var Dkey;
var Rkey;
var LKey;
var Ukey;
var wkey;
var dkey;
var akey;
var skey;

function preload(){
	this.load.image("Labyrinth", "-_-.png");
	this.load.image("BrownPlayer", "Hat_18.png");
	this.load.image("GreenPlayer", "Hat_1.png");

}

function create(){
	this.add.image(675, 500, "Labyrinth");
	player = this.add.sprite(675, 415, "BrownPlayer");
	player.scaleX = 0.25;
	player.scaleY = 0.25;
	player1 = this.add.sprite(675, 575, "GreenPlayer");
	player1.scaleX = 0.25
	player1.scaleY = 0.25
Dkey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
Rkey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
Lkey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
Ukey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

wkey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
dkey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
akey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
skey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

}


function update(){

if (Phaser.Input.Keyboard.JustDown(Dkey)){
	player1.y = player1.y +10
}

if (Phaser.Input.Keyboard.JustDown(Rkey)){
	player1.x = player1.x +10 
}

if (Phaser.Input.Keyboard.JustDown(Lkey)){
	player1.x = player1.x -10
}

if (Phaser.Input.Keyboard.JustDown(Ukey)){
	player1.y = player1.y -10
}

if (Phaser.Input.Keyboard.JustDown(wkey)){
	player.y = player.y -10
}

if (Phaser.Input.Keyboard.JustDown(dkey)){
	player.x = player.x +10
}

if (Phaser.Input.Keyboard.JustDown(akey)){
	player.x = player.x -10
}

if (Phaser.Input.Keyboard.JustDown(skey)){
	player.y = player.y +10
}

}