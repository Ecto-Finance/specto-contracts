const {ethers } = require("hardhat");

(async () =>  {
  const { deploy } = deployments
  let amountMinted = 20;
	let accounts = await ethers.getSigners();
	//console.log(accounts[1].address)
	let collectionNFTContract = await ethers.getContract("CollectionNFT",accounts[1])
	//let gasRes = await ethers.provider.getGasPrice();
	//let nonce = await ethers.provider.getTransactionCount(accounts[1].address)

	// 1. Mint Collection NFTs
	let res = await collectionNFTContract.mint(amountMinted);
	await res.wait(2);
	console.log(res)

	// SEND TO ADDRESS 2 OF DEPLOYER

	// Send 1 - LENS STARTS AT 1
	/*let res1 = await collectionNFTContract.connect(accounts[1])['safeTransferFrom(address,address,uint256)'](accounts[1].address,'0xae7890c0a1fd699ceb6954538f67881e457c7cd7',1)
	console.log(res1)
	await res1.wait(1);
	// Send 2
	let res2 = await collectionNFTContract.connect(accounts[1])['safeTransferFrom(address,address,uint256)'](accounts[1].address,'0xae7890c0a1fd699ceb6954538f67881e457c7cd7',2)
	console.log(res2)
	await res2.wait(1);
	// Send 3
	let res3 = await collectionNFTContract.connect(accounts[1])['safeTransferFrom(address,address,uint256)'](accounts[1].address,'0xae7890c0a1fd699ceb6954538f67881e457c7cd7',3)
	console.log(res3)
	await res3.wait(1);*/
	// Set collection NFT in SpectoSwap
	let spectoSwapContract = await ethers.getContract("SpectoSwap",accounts[0]);
	let res4 = await spectoSwapContract.updateCollectionNFTAddress(collectionNFTContract.address);
	await res4.wait(1);





	//let res = await collectionNFTContract.walletOfOwner(accounts[1].address);
	//await res.wait(3);
	//console.log(res)
	// transfer to twonarly
	/*for(let i=5;i<10;i++){
		//if(i!=16){
		let res = await collectionNFTContract.connect(accounts[1])['safeTransferFrom(address,address,uint256)'](accounts[1].address,'0x7368f654De4746480A85358D7317832E7f885777',i)
		console.log(res)
		await res.wait(1);
	}
	for(let i=10;i<15;i++){
		//if(i!=16){
		let res = await collectionNFTContract.connect(accounts[1])['safeTransferFrom(address,address,uint256)'](accounts[1].address,'0x96E34fE00D49824939Cf5937B122062ABa09D579',i)
		await res.wait(1);
	}*/
	
	//}

})();