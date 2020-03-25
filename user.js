class User {
    constructor(game) {
        this.game = game;
        this.canvas = canvas;
        this.user = user; // unnecessary
        this.image = new Image();
        this.image.src = ""; // there is no universal player image though, it will differ according to each round...insert for round 1 for now...
        this.itemMatch = false; // property for the containing item user selected is correct
        //the following are dimensions of 
        this.x = 0; 
        this.y = 0; 
        this.height = height; 
        this.width = width;
    }

    setControls() { // why would it be the button though??? that's for our index file...
    // how do I select the elements 

        canvas.addEventListener('onclick', itemMatch() {

        })
        }
        //if the correct item is clicked start off the next round...

    //itemMatch() {
    //if (itemCollision) { 

    //}

    //so there WILL be an item collision if I animated right, but how do you also store this as a property(?) in the item it collides with, so that when the user clicks that object we can check the property of that object and see if it did have an object collision...

    //fuck collison...no quad tree/bitmapping needed 

    // check if object collision that was stored as a variable, is matching with the selected input by user, aka is their guess correct? 
    //console.log();
    }    


}