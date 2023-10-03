import "hardhat-deploy";
import "@nomiclabs/hardhat-ethers";
import "@typechain/hardhat";
import { HardhatUserConfig } from "hardhat/types";

/** @type import('hardhat/config').HardhatUserConfig */
//module.exports = {
 // solidity: "0.8.19",
//};

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks:{
    hardhat:{
      chainId: 30080, //31337
    },
    localhost:{
      chainId: 30080, //31337
    }
  },
    solidity: "0.8.19",
    namedAccounts: {
      deployer: {
        defaults: 0
      }
    }
  }

  export default config