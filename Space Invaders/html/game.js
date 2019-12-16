var config = {
 type: Phaser.AUTO,
 width: 1340,
 height: 630,
 scene: {
  preload: preload,
  create: create,
  update: update
 }
};





var game = new Phaser.Game(config);
var player;
var x = 700;
var y = 500;
var right;
var left;
var up;
var down;
var textx;
var texty;
var x1 = 600;
var y1 = 200;
var game = true;
var distancex = 30;
var distancey = 30;
var asteroids = []
var x2 = 200;
var y2 = 200;
var space;
var laserE = false;


function preload() {
    this.load.image("spaceship","ship.png");
    this.load.image("sky","sky.png");
    this.load.image("asteroid","asteroid.png");
    this.load.image("asteroid2","asteroid2.png");
    this.load.image("exp","exp.png");
    this.load.image("laser","laser.png");
}









function create(){
    for (i = 0; i < 1400; i=i+190) {
    for (c = 0; c < 1400; c=c+260) {
      this.add.sprite(c, i, "sky"); 
    }
    }
    player = this.add.sprite(x, y, "spaceship"); 
    asteroid1 = this.add.sprite(x1, y1, "asteroid");
    asteroid1.scaleX = 0.2;
    asteroid1.scaleY = 0.2;
    asteroid2 = this.add.sprite(x1+(Phaser.Math.Between(100, 700)), y1-200, "asteroid");
    asteroid2.scaleX = 0.2;
    asteroid2.scaleY = 0.2;
    asteroid3 = this.add.sprite(x1+(Phaser.Math.Between(100, 700)), y1-800, "asteroid");
    asteroid3.scaleX = 0.2;
    asteroid3.scaleY = 0.2;
    asteroid4 = this.add.sprite(x1+(Phaser.Math.Between(100, 700)), y-1800, "asteroid2");
    asteroid4.scaleX = 0.2;
    asteroid4.scaleY = 0.2;
    asteroid5 = this.add.sprite(x1+(Phaser.Math.Between(100, 700)), y-1200, "asteroid2");
    asteroid5.scaleX = 0.2;
    asteroid5.scaleY = 0.2;
    player.scaleX = 0.12;
    player.scaleY = 0.12;
    right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);   
    space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE); 
    left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);    
    down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    textx = this.add.text(10, 30, '', { font: '16px Courier', fill: '#00ff00' });
    texty = this.add.text(10, 60, '', { font: '16px Courier', fill: '#00ff00' });  
}


function update() {
if (game){
   if (laserE == true){
     laser1.y -= 4;
    if (laser1.y < -40){
    laserE = false;
    }
   }
   
   if (Phaser.Input.Keyboard.JustDown(space)&& laserE == false)
    {
     laserE = true;
     laser1 = this.add.sprite(player.x,player.y,"laser");
     laser1.scaleX = 0.27;
     laser1.scaleY = 0.27;
    }
   if (Phaser.Input.Keyboard.JustDown(right) && player.x < 1285)
    {
      player.x = player.x+39;
    }
   if (Phaser.Input.Keyboard.JustDown(left) && player.x > 85)
    {
      player.x = player.x-39;
    }
    if (Phaser.Input.Keyboard.JustDown(down) && player.y < 550)
    {
      player.y = player.y+50;
    }
    if (Phaser.Input.Keyboard.JustDown(up) && player.y > 50)
    {
      player.y = player.y-50;
    }
    textx.setText('Position: ' + asteroid1.x);
    texty.setText('Position: ' + asteroid1.y);

     asteroid1.y += 4;
    if (asteroid1.y > 800)
    {
        asteroid1.y = -200;
        asteroid1.x = Phaser.Math.Between(10, 1300);;
    }
    asteroid2.y += 5;
    if (asteroid2.y > 800)
    {
        asteroid2.y = -200;
        asteroid2.x = Phaser.Math.Between(10, 1300);;
    }
    asteroid3.y += 4;
    if (asteroid3.y > 800)
    {
        asteroid3.y = -200;
        asteroid3.x = Phaser.Math.Between(10, 1300);;
    }  
    asteroid4.y += 4;
    if (asteroid4.y > 800)
    {
        asteroid4.y = -200;
        asteroid4.x = Phaser.Math.Between(10, 1300);;
    }
    asteroid5.y += 4;
    if (asteroid5.y > 800)
    {
        asteroid5.y = -200;
        asteroid5.x = Phaser.Math.Between(10, 1300);;
    }

}
    if (Math.abs(asteroid1.y-player.y) < distancey && Math.abs(asteroid1.x-player.x) < distancex){
    game = false;
    }
    if (Math.abs(asteroid2.y-player.y) < distancey && Math.abs(asteroid2.x-player.x) < distancex){
    game = false;
    }
    if (Math.abs(asteroid3.y-player.y) < distancey && Math.abs(asteroid3.x-player.x) < distancex){
    game = false;
    }
    if (Math.abs(asteroid4.y-player.y) < distancey && Math.abs(asteroid4.x-player.x) < distancex){
    game = false;
    }
    if (Math.abs(asteroid5.y-player.y) < distancey && Math.abs(asteroid5.x-player.x) < distancex){
    game = false;
    }

    

if(laserE == true){
    if (Math.abs(asteroid1.y-laser1.y) < distancey && Math.abs(asteroid1.x-laser1.x) < distancex){
    asteroid1.y = -200;
    }
    if (Math.abs(asteroid2.y-laser1.y) < distancey && Math.abs(asteroid2.x-laser1.x) < distancex){
    asteroid2.y = -200;

    }
    if (Math.abs(asteroid3.y-laser1.y) < distancey && Math.abs(asteroid3.x-laser1.x) < distancex){
    asteroid3.y = -200;
    }
    if (Math.abs(asteroid4.y-laser1.y) < distancey && Math.abs(asteroid4.x-laser1.x) < distancex){
    asteroid4.y = -200;
    }
    if (Math.abs(asteroid5.y-laser1.y) < distancey && Math.abs(asteroid5.x-laser1.x) < distancex){
    asteroid5.y = -200;
    }

}














    if (game === false){
    exp = this.add.sprite(player.x,player.y,"exp");
    exp.scaleX = 0.43;
    exp.scaleY = 0.43;
    }



    


   


}