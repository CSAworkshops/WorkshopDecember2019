
var config = {
	type: Phaser.AUTO, 			//CANVAS; WEBGL?
	width: 1000,						//40-20-40%  Entwurf(&Rechersche) Programmierung Tests
	height: 2000,
	physics: {
        default: 'arcade',
        arcade: {
            //gravity: { y: 300 },
            debug: false
        }
    },
	scene: {
		preload: preload,
		create: create,
		update: update
	}
};

//neue Spielklasse wird initialisiert
var game = new Phaser.Game(config);
new Collider(world,overlapOnly)

//Lädt am Anfang des Spiels
function preload() {
	this.load.image('Escher-Treppen', 'Escher-Treppen.png');		//Bildname, Speichername 	Laden und bennenen	
	this.load.image('Barrier', 'Barrier.png');
	this.load.image("Boden2","Boden1.png");
	this.load.image("Boden1","Boden2.png");
	this.load.image("Boden3","Boden3.png");
	this.load.image("Boden4","Boden4.png");

	this.load.image("player","Mensch.png");

	this.load.image("questgeber1","Quest.png");
}
var x = 500;
var y = 500;
var cursors;
var barriers;
var player;


//Beim erstellen des Spiels
function create() {
	


	
	this.add.image(500, 1250, "Boden1");
	this.add.image(500, 750, "Boden2");
	this.add.image(500, 250, "Boden3");
	this.add.image(500, 1750, "Boden4");
	
	this.add.image(500, 500, 'Barrier');

	this.add.image(700, 900, 'questgeber1');


	this.cursors = this.input.keyboard.createCursorKeys();//
	this.input.on('pointerdown', paintBarrier, this);

	

	this.barriers= this.physics.add.image(100,100,'Barrier');

	barriers= this.physics.add.staticGroup();
	barriers.create(400, 568, 'Barriers').setScale(2).refreshBody();

	var graphics= this.add.graphics();
	player= this.physics.add.sprite(500, 500, 'player');
	player.setCollideWorldBounds(true);
	this.physics.add.collider(barriers, player);
	var text= this.add.text(50, 50, 'Bsp Text-Tutorial?');//



	
/* 
    this.anims.create(){
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1,
}
*/
}

function paintBarrier(pointer) {
	var image = this.physics.add.sprite(pointer.x, pointer.y, 'Barrier');
	 this.physics.add.collider(this.barriers);
	 this.physics.add.collider(image, player,block);
	//image.body.setGravity(300);
	//image.setCollideWorldBounds(true);
	  
}

function block(image, player){
player.x=0;
player.y=0;
}

//Wiederholt aufgerufen->Spielschleife/-logik
function update() {
	//console.log("hallo");

/*
	if(collide)
	{
		//console.log("move");
		this.stop;
	}
*/
	if (this.cursors.up.isDown) {
		//this.add.image(x, y = y - 10, "Escher-Treppen").setAlpha(0.5);
		player.y -= 10;
	} else if (this.cursors.down.isDown) {
		//this.add.image(x, y = y + 10, "Escher-Treppen").setAlpha(0.5);
		player.y += 10;
	} else if (this.cursors.left.isDown) {
		//this.add.image(x = x - 10, y, "Escher-Treppen").setAlpha(0.5);
		player.x -= 10;
	} else if (this.cursors.right.isDown) {
		//this.add.image(x = x + 10, y, "Escher-Treppen").setAlpha(0.5);
		player.x += 10;
	}



}
/*
function collectItem(player,item)
{
	item.disabledBody(true,true);
}
*/

