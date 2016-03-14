(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Card(x, y, face) {
  this.x = x;
  this.y = y;
  this.back = "glyphicon-picture";
  this.face = face;
}

Card.prototype.location = function() {
  var coordinates = [];
  coordinates.push(this.x);
  coordinates.push(this.y);
  return coordinates;
};

var randomFaces = function(totalCards){
  var faces = ['glyphicon-home', 'glyphicon-trash', 'glyphicon-xbt', 'glyphicon-stats', 'glyphicon-credit-card', 'glyphicon-floppy-disk', 'glyphicon-cd', 'glyphicon-tree-deciduous', 'glyphicon-link', 'glyphicon-tower', 'glyphicon-globe', 'glyphicon-paperclip', 'glyphicon-send', 'glyphicon-education', 'glyphicon-grain', 'glyphicon-scale', 'glyphicon-ice-lolly', 'glyphicon-scissors', 'glyphicon-queen', 'glyphicon-tent', 'glyphicon-apple'];

  var chosenPic = [];
  for (var i = 0; i < (totalCards/2); i ++ ) {
    var randomPos = Math.floor(Math.random() * faces.length );
    chosenPic.push(faces[randomPos]);
    chosenPic.push(faces[randomPos]);
    faces.splice(randomPos, 1);
  }
  chosenPic.sort(function() {
    return 0.5 - Math.random();
  });
  return chosenPic;
};

exports.createDeck = function(rows, columns) {
  var deck = [];
  if(rows % 2 === 1 && columns % 2 === 1) {
    rows++;
  }
  var totalCards = rows * columns;
  if(totalCards > 40) {
    return false;
  }
  var allFaces = randomFaces(totalCards);
  for (var i = 1; i <= rows; i++){
    for(var j = 1; j <= columns; j++) {
      var card = new Card(i, j, allFaces.pop());
      deck.push(card);
    }
  }
  return deck;

};

},{}],2:[function(require,module,exports){
var createDeck = require('./../js/cards.js').createDeck;

$(document).ready(function() {
  $('#sizeSelect').submit(function(event) {
    event.preventDefault();
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


  });
});

},{"./../js/cards.js":1}]},{},[2]);
