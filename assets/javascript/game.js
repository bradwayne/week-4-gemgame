$( document ).ready(function() {


  var userTotal = 0;
  var wins = 0;
  var losses = 0;

  var gemRed;
  var gemGreen;
  var gemBlue;
  var gemYellow;

  var Random;


  function reset() {
  	Random = Math.floor(Math.random() * 101 + 19);
  		console.log(Random)

  		gemRed = Math.floor(Math.random() * 11 + 1);
  		gemGreen = Math.floor(Math.random() * 11 + 1);
  		gemBlue = Math.floor(Math.random() * 11 + 1);
  		gemYellow = Math.floor(Math.random() * 11 + 1);

      userTotal = (0);

  		$('#gemCounter').text(userTotal);

      $('#matchThis').text(Random);
}


reset();


$('.gemRed').on ('click', function() {

    userTotal = userTotal + gemRed;
    console.log("gemCounter = " + userTotal);

    $('#gemCounter').text(userTotal); 
        if (userTotal == Random) {
          wins++
          alert("You Win!")
          $('#winCounter').text(wins);
          reset();
        }
        else if (userTotal > Random) {
          losses++
          alert("You Lose!")
          $('#lossCounter').text(losses);
          reset()
        }   
})

$('.gemGreen').on ('click', function() {

    userTotal = userTotal + gemGreen;
    console.log("gemCounter = " + userTotal);

    $('#gemCounter').text(userTotal); 
        if (userTotal == Random) {
          wins++
          alert("You Win!")
          $('#winCounter').text(wins);
          reset();
        }
        else if (userTotal > Random) {
          losses++
          alert("You Lose!")
          $('#lossCounter').text(losses);
          reset()
        }   
})

$('.gemBlue').on ('click', function() {

    userTotal = userTotal + gemBlue;
    console.log("gemCounter = " + userTotal);

    $('#gemCounter').text(userTotal); 
        if (userTotal == Random) {
          wins++
          alert("You Win!")
          $('#winCounter').text(wins);
          reset();
        }
        else if (userTotal > Random) {
          losses++
          alert("You Lose!")
          $('#lossCounter').text(losses);
          reset()
        }   
})

$('.gemYellow').on ('click', function() {

    userTotal = userTotal + gemYellow;
    console.log("gemCounter = " + userTotal);

    $('#gemCounter').text(userTotal); 
        if (userTotal == Random) {
          wins++
          alert("You Win!")
          $('#winCounter').text(wins);
          reset();
        }
        else if (userTotal > Random) {
          losses++
          alert("You Lose!")
          $('#lossCounter').text(losses);
          reset()
        }   
});

})