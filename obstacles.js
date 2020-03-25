class Obstacles() { // class for containing items 
    constructor(game) {
        this.context = game.context;
        this.img = new Image();
        this.img.src = "icons8-solo-cup-64.png";
        this.x = canvas.width / 3; // coordinates only valid for object 1
        this.y = canvas.width / 3; // coordinates only valid for object 1
        this.space = // space added to initial coordinates, to space objects
        this.dx = dx;
        this.dy = dy;
        this.objectA = objectA; // bad attempt at id'ing object
        this.containers = [] //push drawings into array, and print them, also index provides some identifying mechanism, we can say index[1] will always be the right drawing, would that work??? 

        //can I store them in an array, and loop through them?
        //[{objectA: }]
    }

    draw() { // draw our three containing items/obstacles 
        this.context.save();
        // for (i = 0; i < 3; i++)// can't use for loop, because they begin at diff. coordinates...and even if we told it to, can't extract property that way though...the only way would be to extract last index in array, and add on to the coordinates of that object...
        // not exactly but kind of like: containers[0].x + 20 // containers[0].y + 20 
        //this.img.draw(this.img, ) 
        this.rectFill()
        this.context.restore();
    }

} //push each one into an array too so that they can be counted and extracted if we need to?
shuffle() { // shuffles containing elements - can I wrap it in a set interval//??? 
    this.draw();
    //want first object to eventually "leap" and exchange exact coordinates/location with another object... 

    for (i = 0; i < 10; i++) {
        if (y > && y < ) {
            this.x--
        } else {
            this.x++
        }
        //but want to randomize the movement of all three...not have them follow the same pattern...
    }
    //later just call obstacles.shuffle in our game.js??? 

    /*  var newX = linearSpeed * time / 1000;

     if(newX < canvas.width - myRectangle.width - myRectangle.borderWidth / 2) {
       myRectangle.x = newX;
     }

     // clear
     context.clearRect(0, 0, canvas.width, canvas.height);

     drawRectangle(myRectangle, context); */
}
}

// Important: Should physical behavior be manipulated using CSS transitions, and transformations (which is easier), or should Canvas be used to constantly redraw items and their movement?

// If objects are drawn on canvas though, they can't be really be called on style sheet, since there they don't correspond to any HTML element, in that case, can I create them with DOM, and apply CSS in styles? Or does that kill the logic, since draw, can't really be invoked anymore. Or could I do that??? 

// Want it to be clear enough for user, but also want to incorporate trailing effect (opacity), and be able to change speed?

// should I have a js file for each set of different items I have for each round, or do I store them all here and call them in the index file?

// roundtwo() {
//      if (this.roundone/guess === true) {
//return roundtwo(); 
}

//}

//should I loop through rounds and check?