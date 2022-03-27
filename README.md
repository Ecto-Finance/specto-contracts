# Specto Contracts

Specto Contract Repo.


This Repo will deploy the SpecoSwap Contracts. 

Steps to Deploy:
1. Deploy SpectoSwap with mock addresses in constructor
2. Deploy mock CollectionNFT
3. Run `100_mint_collectionNFT.js` - Mints mock CollectionNFTs and set the collectionNFT address in SpectoSwap
4. The Specto Frontend will take care of setting the FollowNFT from Lens during the migration process and after a profile is minted. (outlined in specto frontend)
5. You can now run `swapToLens` and `swapFromLens`.


⚠️ _This project is under heavy development. Contracts should not be 
used in production._

## Project Overview

- `contracts`: Solidity smart contracts
	- `spectoswap`: main swap contract
	- `CollectionNFT`: erc721 for testing migrations
	- `SpectoFollowNFT`: erc721 mock for Lens Protocol Follow NFT
- `deploy`: deploy scripts 
- `test`: test scripts
- `hardhat.config.js`: Adapted from sushiswap contract repo [sushiswap](https://github.com/sushiswap/sushiswap)

## License

The code in this repository is licensed under MIT, &copy; Lost Labs LLC. See <a href="LICENSE.md">LICENSE.md</a> for more information.
