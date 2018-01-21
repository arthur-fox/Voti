var Petition = artifacts.require("./Petition.sol")
var IdManager = artifacts.require("./IDManager.sol")

module.exports = function(deployer) {
  deployer.deploy(Petition)
  deployer.deploy(IdManager)
};
