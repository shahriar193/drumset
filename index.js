for (var i = 0; i < 7; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    // var audio= new Audio("sounds/tom-1.mp3");
    // audio.play();
    var pressedButton = this.innerHTML;
    makeSound(pressedButton);
    buttonAnimation(pressedButton);
  })
}




document.addEventListener("keypress", function(event) {

  var pressedKey = event.key;
  makeSound(pressedKey);
  buttonAnimation(pressedKey);
})

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("sounds/snare.mp3");
      crash.play();
      break;
    case "k":
      var kick = new Audio("sounds/crash.mp3");
      kick.play();
      break;
    case "l":
      var snare = new Audio("sounds/kick-bass.mp3");
      snare.play();

      break;
    default:
  }
}

function buttonAnimation(key){
  // if((document.querySelectorAll(".pressed").length)!==0){
  //   document.querySelector(".pressed").classList.remove("pressed");
  // }

  document.querySelector("."+key).classList.add("pressed");

  setTimeout(function(){
    document.querySelector(".pressed").classList.remove("pressed");
  }, 100)
}
