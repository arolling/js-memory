function Card(x, y, face) {
  this.x = x;
  this.y = y;
  this.back = "glyphicon-picture";
  this.face = face;
};

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
