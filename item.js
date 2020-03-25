class Item {
    constructor(game) {
        this.game = game;
        this.canvas = canvas;
        this.x = canvas.width / 2; // not really using x though, just want vertical movement...where it's going downwards...coordinates ( , )
        this.y = -10; // want it to drop in from the top when user hits "start" button
        this.radius = 10; // circle size...
        // above is not working...,draw old school way... 
        this.color = "yellow"; // maybe randomize to change it up???
        this.speed = 2;
    }

    // round 1 
    draw() { // will need a separate draw method for each round, since different rounds have different items...
        // image isn't working so draw old fashioned way, just for testing purposes...
        ctx.beginPath();
        this.canvas.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();

        // valid? is it working??  

        // Make our item move now...
        //1) CSS Transform using DOM, if we draw it here, though how do we call it in our styles.css? Can I assign the drawing to a variable, then use DOM to create a proper div with it? How would that impact the behavior with regards to timing and rendering everything correctly? Hellloo, you can "draw" it or create it with DOM, or even directly on HTML and toggle visibility. You can position elements on top of Canvas, style them with css animations, and addEventListener for click and check if user is correct!!!

        //Should I separate in an update() function... 
        //2) Canvas Transform OR Canvas Animation 
        //this.item.translate // but this is translating the entire canvas, not just the object though? How will that influence behavior of other objects? always have to reset too, not worth it...
        //choose classic animation! 

        // want it to collide with the center object
        // for (i = 0; i < canvas.height / 3; i++) {
        // for i < #, choose a number that when our original position gets incremented it hits our obstacle...
    }

    update() {
        this.draw();
        if (this.y < canvas.height / 3) {
            this.y += this.speed // add increments of two to y coordinate so it moves down. 
        }
    }

    //coordinate just beyond top of our obstacle
    // if I increment, let's say +2 during each draw, each function is updated and animation frame is processed, does that mean 2+ from previous position? This is where I have a hard time conceptualizing. 

    // collision between arc of our item and arc of our containing element (obstacle), but would it work if one of these elements is an image, or do I have to draw it?

    itemCollision() {

            //much cleaner alternative...
            var circle1 = {
                radius: 20,
                x: 5,
                y: 5
            };
            var circle2 = {
                radius: 12,
                x: 10,
                y: 5
            };

            var dx = circle1.x - circle2.x;
            var dy = circle1.y - circle2.y;
            var distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < circle1.radius + circle2.radius) {
                // collision detected!
                /// bitccch your containing object, is not a perfect sphere, therefore the "radius isn't really applicable here, you need to change the way that's measured 
            }

            //round 2
            draw() {}

            //round 3
            draw() {

            }