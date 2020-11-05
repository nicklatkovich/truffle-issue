async function getContractA(ContractA) {
  if (process.env.CONTRACT_A_ADDRESS) return ContractA.at(process.env.CONTRACT_A_ADDRESS);
  return ContractA.deployed();
}

const Network = {
  DEVELOPMENT: "development",
  KOVAN: "kovan",
  MAINNET: "mainnet",
};

module.exports = { getContractA, Network };
