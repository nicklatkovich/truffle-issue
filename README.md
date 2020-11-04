# Truffle issue #3503

Reproduces [truffle issue #3503](https://github.com/trufflesuite/truffle/issues/3503).

Migration drops with error:
> ${CONTRACT_NAME} has not been deployed to detected network (network/artifact mismatch)

To resolve this issue just remove import in `migrations/1_deploy_contract_a.js`.
