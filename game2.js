var firstdiv = document.getElementById("red");

//firstdiv.addEventListener("click", check()) 

//function check() {
// if (e.target.id === "blue") {
   //flip visibility of div box announcing victory
//}
// }

//document.getElementById("red").animate([
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
//var random = animationArray[Math.floor(Math.random * animationArray.length)]
//Make another variable (window.innerWidth - el.width) -- for  appending random px to translate X, but ensuring it can never disappear off screen.
// put var of element selected by dom then access styles, and add to animation property, but this supposes that the div has this property already...? 
// firstdiv.style.animation = random;

// SECOND: 
// SUPER Important that they don't come off the screen, how to set parameters?

