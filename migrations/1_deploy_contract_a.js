const { Network } = require("../utils/index");

const ContractA = artifacts.require("ContractA");

module.exports = async function (deployer, network) {
  if (network === Network.MAINNET || process.env.CONTRACT_A_ADDRESS) return;
  await deployer.deploy(ContractA, 123);
};
