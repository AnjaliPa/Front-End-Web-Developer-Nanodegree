var content;

var Enemy = function() {
    // Variables applied to each of the instances here,
   
	
	//Update the enemy's position
	this.type = random(1, 6);
    this.sprite = 'images/enemy-bug.png';
    this.x = this.type * - 101;
    this.y = random(0, 4) * 60 + 62;
    this.speed = this.type * 100;
};

var random = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

Enemy.prototype.update = function(dt) {

    // multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	   this.x += this.speed * dt;
	
    var length = allEnemies.length;
    for (var enemy = 0; enemy < length; enemy ++) {

        if (allEnemies[enemy].x > 505) {
            allEnemies.splice(enemy, 1, new Enemy());
			
        }
   
    }

};

// Draw the enemy on the screen
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	
	 
};

// Now write your own player class
var Player = function (type) {
    this.type = type;
    this.sprite = 'images/char-boy.png';
    this.x = 101;
    this.y = 402;
   
};
// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.update = function() {

      var length = allEnemies.length;
    for (var enemy = 0; enemy < length; enemy ++) {

          if (Math.abs(allEnemies[enemy].x - this.x) < 50 &&
            Math.abs(allEnemies[enemy].y - this.y) < 66) {
                content="Enemy Collide with Player,Game over!!"
             
              //window.location.reload(); 
			 openmodal();
              
			 
		}
	}

       
    
};
// it is defined for Open dialog Model
function openmodal(){
    // Get the modal
var modal = document.getElementById('myModal');
$("#result").replaceWith(content);
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

modal.style.display = "block";
  


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
     window.location.reload(); 
     this.reset();
}


}
Player.prototype.handleInput = function (keycode) {

    /**
     * Move the player in the direction of the arrow key if the game
     *     the game is not paused and an arrow key is pressed.
     */
    if (keycode === 'up' && this.y > 44 ) {
        this.y -= 83;
		
    }

    else if (keycode === 'down' && this.y < 396 ) {
        this.y += 83;
    }

    else if (keycode === 'left' && this.x > 83  ) {
        this.x -= 101;
    }

    else if (keycode === 'right' && this.x < 404 ) {
        this.x += 101;
    }
	if(this.y === -13 ){
        content="You Reached on Water Level You Won the Game!!!"
        openmodal();
       
	
	
	}
    
};

Player.prototype.reset = function (keycode) {
	this.x = 101;
    this.y = 402;
}

// Draw the enemy on the screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
//instantiate  objects.
var player = new Player();


// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1 = new Enemy();
var enemy2 = new Enemy();
var enemy3 = new Enemy();
var allEnemies = [enemy1,enemy2,enemy3];


// This listens for key presses and sends the keys to 
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
	
});


