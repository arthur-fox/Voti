var Petition = artifacts.require("./Petition.sol");

contract('Petition', function(accounts) {

  let petitionInstance

  it("should allow me to vote", function() {
    return Petition.deployed().then(function(instance) {
      petitionInstance = instance

      return petitionInstance.vote({from: accounts[0]})
    }).then(function() {
      return petitionInstance.get.call()
    }).then(function(storedData) {
      assert.equal(storedData, 89, "The value 89 was not stored.")
    });
  });

});
