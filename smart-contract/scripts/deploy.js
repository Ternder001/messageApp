// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
// const hre = require("hardhat");

// async function main() {
//   const currentTimestampInSeconds = Math.round(Date.now() / 1000);
//   const unlockTime = currentTimestampInSeconds + 60;

//   const lockedAmount = hre.ethers.parseEther("0.001");

//   const lock = await hre.ethers.deployContract("Lock", [unlockTime], {
//     value: lockedAmount,
//   });

//   await lock.waitForDeployment();

//   console.log(
//     `Lock with ${ethers.formatEther(
//       lockedAmount
//     )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
//   );
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });

// const { ethers } = require("hardhat");

// async function main() {
//   // Replace with your Ethereum wallet's private key
//   const privateKey = "8bc58bfc4330b690b4866e472e65325ec9c8b064585b982357ff3ebbc1a76766";
//   const wallet = new ethers.Wallet(privateKey);

//   // Deploy the MyMessage contract
//   const MyMessage = await ethers.getContractFactory("MyMessage");
//   const initialMessage = "Hello, Hardhat!";
//   const myMessageContract = await MyMessage.deploy(initialMessage);

//   console.log("MyMessage contract deployed to:", myMessageContract.target);
// }

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });


async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const MyMessage = await ethers.getContractFactory("MyMessage");
  const myMessage = await MyMessage.deploy("Hello, Hardhat!");

  console.log(`MyMessage address:, ${myMessage.target}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
