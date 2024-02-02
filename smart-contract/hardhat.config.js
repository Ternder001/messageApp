require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const URL = 'https://eth-sepolia.g.alchemy.com/v2/1BW0ilMvH1KL-vySVXuF7NrfVenLQ8Ab';
const KEY = '8bc58bfc4330b690b4866e472e65325ec9c8b064585b982357ff3ebbc1a76766';
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia : {
       url: URL,
       accounts: [`0x${KEY}`],
     },
   },
  }