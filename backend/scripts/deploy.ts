// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the

import hre, { ethers } from "hardhat";

const main = async () => {
  const contractFactory = await ethers.getContractFactory('PolyAliens');
  const unlockTime = 1686734815; // Replace with your desired unlock time
  const contract = await contractFactory.deploy('Eloqui', 'EL', 'ipfs://QmWEixotADiiYCkaqqvHf6KA6cjLE9HbHsu5GaXnMXn5Py/', "");
  await contract.deployed();

  console.log("Contract deployed to:", contract.address);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

runMain();

// Contract deployed to: 0x0C32e78F607e8B03DB04026c2951d7C9BB11343d