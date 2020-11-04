const { getContractA } = require("../utils");

const ContractB = artifacts.require("ContractB");

module.exports = async function (deployer) {
  const a = await getContractA();
  await deployer.deploy(ContractB, a.address);
};
