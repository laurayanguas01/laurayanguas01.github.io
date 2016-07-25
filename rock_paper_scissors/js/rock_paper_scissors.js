// var firstName = prompt("What is your first name?");
// var lastName = prompt("What is your last name?");
// var fullName = firstName + lastName;
// var name = document.querySelector("#name");
// name.textContent = "Hello!";

// var age = prompt ("what is your age?");
// var days = age * 365.25;
//
// alert(age + " yrs is about " + days + " days");

// var firstName = "Lau";
// var nameLength = 6;
// var lastName = "Yan";
// var lastNameTwo = 4;
// var newName;
//
//
//   if(firstName.length <= nameLength && lastName.length == 4) {
//     alert("Good, you're all set...");
//   } else {
//     alert("Get a shorter name!");
//     newName = prompt("What would you like your new name to be?");
//       if(newName == nameLength) {
//         alert("Good, you're new name is not against the law!");
//     }
// }

// ### Rock Paper Scissors
// Create a rock paper scissors game with the following guidelines:
// 1. Prompt the use to enter "r" for rock, "p" for paper, or "s" for scissors.
// 2. Use a random number generator to choose a throw for the computer.
// 3. Display to the user who won the toss (be sure to include what the computer threw).
// 4. Keep track of the points. After every toss, display who has how many points.

var pc = Math.floor((Math.random() * 3) + 1);
var pcThrow;
//if if is only one line, podemos eliminar los corchetes y escribirlos asi.
if (pc === 1) pcThrow = ("rock");
if (pc === 2) pcThrow = ("paper");
if (pc === 3) pcThrow = ("scissors");
var pcPoints = 0;
var userPoints = 0;
var numLoops = 3;

//FOR LOOP --> lo que pasa antes, durante cuanto y lo que pasa despues. antes declaramos la var i=0,
//la funcion va a correr mientras i sea menor a numLoops, y cada vez que termina se agrega un numero a i



// $( "div.demo-container" ).text()


$(document).ready(function() {
  $('.btn').click(function() {
    var usersThrow = $(this).attr("value");
    console.log(usersThrow);
    if (usersThrow === pcThrow) {
      $('.' + usersThrow + "1").slideDown("slow");
      $('.' + pcThrow + "2").slideDown("slow");
      alert ("The computer also throws " + usersThrow + ". It's a tie!");
      pcPoints = (pcPoints + 1);
      userPoints = (userPoints + 1);
    } else if (pcThrow === "scissors" && usersThrow === "paper" || pcThrow === "rock" && usersThrow === "scissors" || pcThrow === "paper" && usersThrow === "rock" ) {
      alert ("The computer throws " + pcThrow + ". You loose the toss!");
      $('.' + usersThrow + "1").slideDown("slow");
      $('.' + pcThrow + "2").slideDown("slow");
      pcPoints = (pcPoints + 1);
    } else if (pcThrow === "scissors" && usersThrow === "rock" || pcThrow === "rock" && usersThrow === "paper" || pcThrow === "paper" && usersThrow === "scissors" ) {
      alert ("The computer throws " + pcThrow + ". You win the toss!");
      $('.' + usersThrow + "1").slideDown("slow");
      $('.' + pcThrow + "2").slideDown("slow");
      userPoints = (userPoints + 1);
    }
    alert ("Points: Computer - " + pcPoints + " You - " + userPoints);
  });
 });
