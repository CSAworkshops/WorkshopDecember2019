//Spiel konfigurieren
var config = {
	type: Phaser.AUTO,
	width: 1929,
	height: 925,
		//image.resize: {x = 5
		//extend: {
            	//drawKeyboard: drawKeyboard
        	//},
  //Physic zum spiel hinzufügen
  physics: {
    //Typ der Physic
    default: "arcade", 
    //Eigenschaften der Physic
    arcade: {
      //Schwerkraft im spiel, wohin Fallen Objekte
      gravity: {
        y: 200 //Y Sagt das objekte mit 200 nach "unten" fallen
      },
      debug: false //Wenn debug: true dann wird ein Kasten und die Schwerkraft mit einem grünen strich angezeigt
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
	//var leftButton
	//var rightButton
	//var keyA;
	//var key5;
	//var keySpace;
var image = {};
var block = {};
var Background = {};
var Velocity = 150;
var VelocityBlock = -100;
var Frame = 0;
var Spawn = 400;
	//Lädt zu Anfang des Spiels
function preload(){
	this.load.image("red_ball", "red_ball.png"); //Bild Laden und benennen
	this.load.image("block", "castleHalfMid.png");
	this.load.image("Background","colored_castle.png");
}

		//Beim erstellen des Spiels
function create(){
	this.add.image(config.width / 4, config.height / 2, "Background");
	this.add.image((config.width / 4)*3, config.height / 2, "Background");
		//var self = this;
  		//this.socket = io();
  		//this.socket.on('currentPlayers', function (players) {
   		//Object.keys(players).forEach(function (id) {
      		//if (players[id].playerId === self.socket.id) {
       		//	addPlayer(self, players[id]);
      		//}
    		//});
  		//});
		//this.drawKeyboard();
    		//  Create a Key object we can poll directly.

    		//  This is especially useful if you need to poll the key in a tight loop, such as for player controls.

    		//keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

    		//key5 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FIVE);

   		//keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
		//leftBtn = this.add.sprite(400 - 300, 200, 'button', 0);
		//leftBtn.alpha = 0;
		//rightBtn = this.add.sprite(1000 - 300, 200, 'button', 1);
		//rightBtn.alpha = 0;
		//this.add.image(850, 400, "red_ball");
	var keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
	var keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
	keyLeft.onDown = Leftdown
	keyRight.onDown = Rightdown
	this.physics.world.setBounds(0, 0, 1929, 925);
	image = this.physics.add.sprite(200, 0, "red_ball");
	image.setCollideWorldBounds(true);
	block = this.physics.add.image(1929, Phaser.Math.Between (0,925), "block");
	block.scale = 4
	block.setImmovable(true);
	block.body.allowGravity = false;
		//image = this.add.sprite(200, 0, "red_ball");
	
			//this.Physics.enable(image, Phaser.Physics.ARCADE);
			//this.physics.world.enable(image);
	image.setBounce(true);	
			//image.body.velocity.x=100;
		//block.resize.x = 4
	this.physics.add.collider(image, block, colladeblock);
    	//this.physics.add.colladeblock(image, block, colladeblock, null, this);
	image.scale = 0.35
	
}
	//function drawKeyboard ()
	//{
	//    this.add.image(0, 0, 'keyboard').setOrigin(0);
	//}
	
//Widerholt aufgerufen -> Spielschleife / Spiellogik
function update(){
		//image.y += 5;
		//image.x += 5;
		//if (keyA.isDown)
    		//{
        	//	console.log('A');
    		//}

   		// if (key5.isDown)
    		//{
        	console.log('5');
    		//}

    		//if (keySpace.isDown)
    		//{
        	//	console.log('spacebar');
    		//}
	Frame += 1;
	if(Frame>15){Velocity += 1;}
	var right = config.width - image.width / 5;
	if(image.x == (0 + image.width / 2)){Velocity = 200;}
	if(image.x >= right){Velocity = -300;}
	if(Frame>600){VelocityBlock -= 5;}
	if(Frame>20&&image.body.velocity.x<-400){Velocity = 200}
	block.setVelocityX(VelocityBlock)

	if(Frame>60){Frame=0}
	image.setVelocityX(Velocity);
	if(Frame>600){Spawn -= 5;} 
	if(Frame>Spawn){this.physics.add.image(1929, Phaser.Math.Between (0,925), "block");};
}
function colladeblock(ball,block){
	Velocity = -50
}
function Leftdown(){
	Velocity -= 5
}
function Rightdown(){
	Velocity += 5
}