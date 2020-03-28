
// Weird CSS Behavior to fix: 1) Ball is being really strange, and it's ugly...do different timing instead
// 2) Keyframes are janky, get coordinates with event click so they land at the same spot and 
// add that animation smoother property you read. 3) Maybe place images inside of divs, rather than making them background images? Play with size. 3) Consolidate more, and put into cup class.

//opacity not working, also invert the cups...
//Ball, use icon, <i class="fas fa-bullseye"></i>

// LEVELS: Alter Speed, by dynamically altering animations...
// 1) Create method for randomizing time. (Min, max would be good too...)
// Slow speed: var randTime1 = Math.floor(Math.random() *  ) // add e.listener for slow button and run this...
// Fast speed: var randTime2 = Math.floor(Math.random() *  )
// 2) Grab the element with DOM first.documentQuerySelector 
// 3) Access the element.style.animation-duration = randTime1
// with .animation = "...time method here" or .animation-duration = "";
// Also set new attribute and create through there. 

// console.log(rightContainer)

// DOM extraction, and event listeners
var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");

// array of our three cups, after they were identified with ids
var cups = [first, second, third];

// for now, let's always make the second cup our "containing cup"
var correct = second;
//console.log(correct)

// display message for lost! --- can this be Canvas too? Confetti!
var won = document.getElementById("won");
// console.log(won)

// display message screen for lost! 
var lost = document.getElementById("lost");
// console.log(lost)

//revert back to the game, exit out of both screens, whether you won or lost...
won.addEventListener('click', function () {
    this.style.display = 'none';
});

lost.addEventListener('click', function () {
    this.style.display = 'none';
});

// add event listeners for cup ids
first.addEventListener('click', onClickCup);
second.addEventListener('click', onClickCup);
third.addEventListener('click', onClickCup);

// display winning and losing messages - but also be sure to only permit them after function has run.
// mix not hit yet 
function onClickCup(e) {
    if (e.target == correct && clicked === true) { // double equals, if our hit element is the same as saved var && clicked = true; 
        won.style.display = "block";
        lost.style.display = 'none';
    } else if (e.target == !correct && clicked === true) {
        won.style.display = "none";
        lost.style.display = 'block';
    } else {
        won.style.display = "none";
        lost.style.display = 'none';
    }
}

// set global variables to be invoked 
var clicked = false; // test for conditional statement in onClickCup, if (mix was clicked), set to true...
var intervalID = null; // passing to setInterval
var counter = 0; // add each time function shuffles
var counterMax = 0; // ceiling of where we will go...
var mix = document.getElementById('mix'); // grab button

mix.addEventListener('click', function () { // add user interaction that will kick things off 
    scrambleControls(10, 900);
    clicked = true;
});

console.log(mix) // -- what property can be used in conditional? clickOnce? 

function scrambleControls(numTimes, speed) { //how many times should we shuffle, and how quickly
    if (intervalID) { // if the function is firing, let the user know...
        alert('Chill, things are moving...');
        return;
    }
    counter = 1; // scramble cups has one movement 
    counterMax = numTimes; // the max number is whatever we pass it in the function 
    scrambleCups(); // go ahead and mix it up, add one to couner
    intervalID = setInterval(function () {
        scrambleCups();
        counter++;
        if (counter >= counterMax) { // kill the function, it's over our desired number of times, and not button can be hit again, without an alert activating 
            clearInterval(intervalID); // related to above
            intervalID = null; // reset
        }
    }, speed);
}

function scrambleCups() {
    var positions = [1, 2, 3]; // array of three cup positions 
    positions.sort(function (a, b) { // mix mix, a comes first, so subtract to get - #
        return .5 - Math.random();
    });
    console.log(positions);
    setCupPosition(cups[0], positions[0]); //scrambled positions array, new case in index
    setCupPosition(cups[1], positions[1]); //goes through cups array declared at beginning with element ids
    setCupPosition(cups[2], positions[2]);
    console.log(positions);
}

/* var positions = [1, 2, 3]; // array of three cup positions 
positions.sort(function (a, b) { // mix mix, 
  console.log(.5 - Math.random());
  console.log(positions);
}); */

function setCupPosition(cup, pos) {
    switch (pos) {
        case 1:
            cup.style.left = '200px';
            break;
        case 2:
            cup.style.left = '400px';
            break;
        case 3:
            cup.style.left = '600px';
            break;
    }
}

//event.target V event.currentTarget V using e. as parameter, and what about adding .id? ?

//cup.forEach(cup => cup.addEventListener("click", function(event) {
//  if (event.target === rightContainer) {
//   won.style.display = "visible"
// } else {
//    lost.style.display = "visible"
//  }
//})
// ); 

//var cups = document.getElementsByClassName("cup"); 
//cups.addEventListener("click", function(event) {
//  if (event.target.id === "second") {//rightContainer
//   won.style.display = "visible";
// } else {
//    lost.style.display = "visible";
//  }
// }); 

//function check(e) { //
//  if (e.target.id === rightContainer) { //rightContainer
//    won.style.display = "visible";
//flip visibility of div box announcing victory
//  } else {
//    lost.style.display = "visible";
//  }
// }

//document.getElementById("first").animate([
// keyframes
// { transform: 'translateY(0px)' }, 
// { transform: 'translateY(300px)' }
// ]); //, { 
// timing options
// duration: 1000,
// iterations: Infinity
// });

// Okay, assume we have the proper keyframes, now how to randomize them, so that divs have different movement patterns every time game is played? 

//what if I had an array of the animations, that I shuffled through, returned an index, and appended that animation to each element...? Would that work?? 

//var animationArray = [move, slide, switch]
//var random = animationArray[Math.floor(Math.random() * animationArray.length)]
// put var of element selected by dom then access styles, and add to animation property, but this supposes that the div has this property already...? 
//append with var mix = document.getElementById("first").styles.animation = random; what if we get repeats?
//setCupPosition(cup[0].styles.animation, animationArray[0];
//console.log(mix)

// SECOND: 
// SUPER Important that they don't come off the screen, how to set parameters?
//Make another variable (window.innerWidth - el.width) -- for  appending random px to translate X, but ensuring it can never disappear off screen.

// trying to get the coordinates of our element, probably requires offset??? 
document.getElementById("first").addEventListener("click", coordinates)

function coordinates(e) {
    console.log(e.clientX)
    console.log(e.clientY)
}

var hare = document.getElementById("hare")
var turtle = document.getElementById("turtle")

// Canvas 
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
width = canvas.width;
height = canvas.height;

ctx.fillStyle = "blue" // add linear gradient that looks like pool water...??? 
ctx.font = "30px Helvetica"; // Change Google Fonts
ctx.fillText("Directions: Look where the ball goes, and then don't", 10, 50);

function draw() { //just test, draw 20 random dots within canvas
    for (i = 0; i < 20; i++) {
        var x = Math.floor(Math.random() * 1000)
        var y = Math.floor(Math.random() * 99)

        console.log(x, y);
        var r = Math.floor(Math.random() * 255)
        var g = Math.floor(Math.random() * 255)
        var b = Math.floor(Math.random() * 255)
        ctx.globalAlpha = 0.7;
        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        ctx.beginPath();
        // remember: context.arc(x, y, r, startAngle, endAngle)
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }
}

draw();
