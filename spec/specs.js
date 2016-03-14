var expect = require('chai').expect;
var createDeck = require('./../js/cards.js').createDeck;

describe('Card', function() {
  it('will create a new card object with a place and face', function() {
    var testDeck = createDeck(3, 6);
    expect(testDeck[7].back).to.equal("glyphicon-picture");
    expect(testDeck[1].location()).to.eql([1, 2]);
  });

  it('will create a deck of sufficient size for x and y rows and columns', function() {
    var testDeck = createDeck(3, 3);
    expect(testDeck.length).to.equal(12);
  });
});
