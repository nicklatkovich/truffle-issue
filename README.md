# Truffle issue

Reproduces bug
> ${CONTRACT_NAME} has not been deployed to detected network (network/artifact mismatch)

To resolve this issue just remove import in `migrations/1_deploy_contract_a.js`.
