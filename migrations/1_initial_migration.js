const RentableNft = artifacts.require('RentableNft');

module.exports = function (deployer) {
  deployer.deploy(RentableNft);
};
