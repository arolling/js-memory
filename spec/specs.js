var expect = require('chai').expect;
var Card = require('./../js/cards.js').Card;

describe('Card', function() {
  it('will create a new card object with a place and face', function() {
    var testCard = new Card(1, 2, "glyphicon-xbt");
    expect(testCard.face).to.equal("glyphicon-xbt");
    expect(testCard.location()).to.eql([1, 2]);
  });
});
