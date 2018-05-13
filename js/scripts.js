var scores,
    activePlayer,
    roundScore,
    gamePlaying;

init();

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;    
    $('#current-0').text(roundScore);
    $('#current-1').text(roundScore);
    $('#player-0').addClass('pulsate');
    $('#player-1').removeClass('pulsate');
    $('#score-0').text(scores[activePlayer]);
    $('#score-1').text(scores[activePlayer]);
}

function looseRound() {
    roundScore = 0;
    $('#current-' + activePlayer).text(roundScore);
    $('#player-' + activePlayer).toggleClass('pulsate');
    switchPlayer();
    $('#player-' + activePlayer).toggleClass('pulsate');

}

function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1
    } else {
        activePlayer = 0
    }
}

$('#btn-roll').click(function () {
    if (gamePlaying) {
        var dice = Math.floor(Math.random() * 6) + 1;
        var diceElement = $('#diceImage');
        diceElement.attr("src", "../img/die-" + dice + ".svg");
        if (dice > 1) {
            roundScore += dice;
            $('#current-' + activePlayer).text(roundScore);
        } else {
            looseRound()
        }
    }
})

$('#hold-btn').click(function () {
    if (gamePlaying) {
        scores[activePlayer] += roundScore;
        $('#score-' + activePlayer).text(scores[activePlayer]);

        if (scores[activePlayer] >= 20) {
            alert('Player ' + (activePlayer + 1) + ' has won!')
            gamePlaying = false;
        } else {
            looseRound()

        }

    }
})

$('#btn-new').click(init)