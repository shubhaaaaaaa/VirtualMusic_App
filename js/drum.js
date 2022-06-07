var number = document.querySelectorAll(".string").length;
for (var i = 0; i < number; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var key = this.innerHTML;
    playdrum(key);  });
}

document.addEventListener("keypress", function (event) {
  var key =  event.key;
  playdrum(key);
  var key1 = checkkey(key);
$("."+key1).addClass("op");
setTimeout(function(){
  $("."+key1).removeClass("op");
},300);

});


function playdrum(key) {
  switch (key) {
    case "1":
      var tom1 = new Audio("../sounds/drum/tom-1.mp3");
      tom1.play();
      break;

    case "2":
      var tom2 = new Audio("../sounds/drum/tom-2.mp3");
      tom2.play();
      break;

    case "3":
      var tom3 = new Audio("../sounds/drum/tom-3.mp3");
      tom3.play();
      break;

    case "4":
      var tom4 = new Audio("../sounds/drum/tom-4.mp3");
      tom4.play();
      break;

    case "5":
      var tom5 = new Audio("../sounds/drum/snare.mp3");
      tom5.play();
      break;

    case "6":
      var tom6 = new Audio("../sounds/drum/kick-bass.mp3");
      tom6.play();
      break;

    case "7":
      var tom7 = new Audio("../sounds/drum/crash.mp3");
      tom7.play();
      break;

    case "8":
      var tom8 = new Audio("../sounds/drum/hihat.mp3");
      tom8.play();
      break;

    default:
      console.log(key);
  }
}

function checkkey(key) {
  switch (key) {
    case "1":
      return "one";
      break;
    case "2":
      return "two";
      break;
    case "3":
      return "three";
      break;
    case "4":
      return "four";
      break;
    case "5":
      return "five";
      break;
    case "6":
      return "six";
      break;
    case "7":
      return "seven";
      break;
    case "8":
      return "eight";
      break;
    default:
      return key;
      break;
  }
}