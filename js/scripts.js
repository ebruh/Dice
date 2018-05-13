var scores = [0,0];
var activePlayer = 0;
var roundScore = 0;


$(document).ready(function() {
   
})
$('#btn-roll').click(function(){
    var dice = Math.floor(Math.random() * 6) + 1;
    var diceElement = $('#diceImage');
   diceElement.attr("src", "../img/die-"+ dice +".svg");
    roundScore += dice;
    
    
    
})
var firstName = "ibrahim";
var lastName = "Makaraan"
var fullName = firstName + " hello  "+ lastName;
console.log(fullName);




