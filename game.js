class Game {
    constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.width = canvas.width//do window.innerWidth instead 
    this.height = canvas.height;
    // referencing the game (this) inside the player class
    // assign it to window height and width?
    this.user = new User(this);
    this.user.setControls(); //just a singular click to guess is all that is needed.
    this.obstacles = new Obstacles(this); // iterate through list of containing items, should I have a separate array for each round, since I want a diff. number of containing items, and also want them to have different behaviors? 
    this.animationId; // to call that frame instance, used as a callback
    this.frame = 0; // where we kick off 
    this.gameOn = true; // game status 
    this.score = 0; // will probably not use, unless bonuses are included? 
    this.gamesWon = 0; 
    this.rightContainer = false;  // boolean to check if the user is correct, and to permit player to proceed if they guessed correctly 
    }

// Draw objects sequentially 
// 1) Containing Objects 2) Hidden Item 3) Animate Containing Objects so that each object has a random method...

// Increasing Difficulty: 
// With each successive round expand space that items can move in, so user has to look at an increasing canvas area to track the object and containing element. 

// Look at notebook, for the rest of ideas. 

// MAIN METHODS:
// Object behavior methods 
// Have three main "scrambling" methods, and modify them 2x over for multiple rounds. 
// Round 1: Items pass over one another, scrambling, and then stop. (Shuffle Method)
// Round 2: Items pass over one another, scrambling, and then stop, but also vibrate. (Shuffle + Shake Method)
// Round 3: 

// Method where our hidden/"guess where it is?"/object coincides with one of our objects.

start() {
    this.reset();
    this.animation()
}

//setup our canvas with object, and items 
draw() {
    this.context.clearRect(0, 0, this.width, this.height); // how much is being erased though, we just want to erase once we move on to the next round, or when the game is over and we want to begin anew...this cleans the canvas -- redrawn during every fps? 
    this.item.draw(); // 
    this.obstacles.draw(); // will draw all at once...
    //for (let i = 0; i < this.obstacles.length; i++) { don't really need an array to push, or do I saw, since it's more than one? 
    //this.obstacles[i].draw(); 
    this.canvas.fillRect(10, 10, 40, 40); // test item, since drawing picture is not working, to see if item behaves as desired. 
}

update() {
    this.frame++;
    this.user.update();
    if (!this.user.itemMatch()) { //if item doesn't match, then it's over!!! 
        this.gameOn = false; 
    }
    }; 

animation() {
    this.draw();
    this.update();
    this.animationId = window.requestAnimationFrame(()=> {
        if (this.gameOn) {
        this.animation();
        } else {
        this.gameOver();
        }
    });
}

gameOver() {
    window.cancelAnimationFrame(this.animationId);
    this.context.fillstyle = "green";
    //draw image you wanted...
}

reset () {
    this.user = new User(this);
    this.user.setControls(); 
    this.obstacles = new Obstacles(this);
    this.frame = 0; 
    this.gameOn = true; 
    this.score = 0; 
    this.gamesWon = 0; 
    this.rightContainer = false; 
}

timer() {
    // create div and select with DOM
    // inner text change
    // need diff. timers for diff. rounds... 
}

}
