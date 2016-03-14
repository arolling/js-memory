var createDeck = require('./../js/cards.js').createDeck;

$(document).ready(function() {
  $('#sizeSelect').submit(function(event) {
    event.preventDefault();
    $("#field").empty();
    var rows = $('#row').val();
    var columns = $('#column').val();
    var newDeck = createDeck(rows, columns);
    if(newDeck === false) {
      $('#row').val('');
      $('#column').val('');
      $('#error').append('<h3>Please enter a smaller set of numbers</h3>');
    } else {
      for(var i = 0; i < newDeck.length ; i++) {
        $('#field').append('<button type="button" class="btn btn-default btn-lg" id="' + i + '"><span class="back glyphicon ' + newDeck[i].back + '"></span><span class="face glyphicon ' + newDeck[i].face + '"></span></button>');
        if((i + 1) % columns === 0) {
          $('#field').append('<br>');
        }
      }
    }

    $('.back').click(function(event) {
      $(this).hide();
      $(event.target).next().show();
    });


  });
});
