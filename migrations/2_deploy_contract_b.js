const { getContractA } = require("../utils");

const ContractA = artifacts.require("ContractA");
const ContractB = artifacts.require("ContractB");

module.exports = async function (deployer) {
  const a = await getContractA(ContractA);
  await deployer.deploy(ContractB, a.address);
};
