//kick-off game 

//user hits the button
// 1) item appears, we have a time function to present it?, before it matches the random patterns of one our objects...test by object collision, if our "prize" collides with one of our objects, we "hide it" (attach a class, or just display hidden on styles.css?)
// 2) After that we check which one of our items had a collision with our specific item??? *Remember our items will be colliding and shuffling over one another, so we have to define a specific collision, not just any... 

const canvas = document.querySelector("canvas");
const game = new Game(canvas);
//window

button.addEventListener("onclick", event => {
    game.start(); //pass canvas
  }
});