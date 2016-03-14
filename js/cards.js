exports.Card = function(x, y, face) {
  this.x = x;
  this.y = y;
  this.back = "glyphicon-picture";
  this.face = face;
};

exports.Card.prototype.location = function() {
  var coordinates = [];
  coordinates.push(this.x);
  coordinates.push(this.y);
  return coordinates;
}
