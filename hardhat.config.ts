import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
import "@nomicfoundation/hardhat-verify";


dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.25",
  networks: {
    cardonaZkevm: {
      url: process.env.ALCHEMY_PROJECT_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    // sepolia: {
    //   url: process.env.ALCHEMY_PROJECT_URL,
    //   accounts: [`0x${process.env.PRIVATE_KEY}`],
    // },
  },
  
  etherscan: {
    apiKey: {
      // Is not required by blockscout. Can be any non-empty string
      //sepolia: "abc"
      cardonaZkevm:"abc"
    },
    customChains: [
      // {
      //   network: "sepolia",
      //   chainId: 11155111, 
      //   urls: {
      //     apiURL: "https://eth-sepolia.blockscout.com/api",
      //     browserURL: "https://eth-sepolia.blockscout.com/",
      //   },
      // },
      {
        network: "cardonaZkevm",
        chainId: 2442, 
        urls: {
          apiURL: "https://explorer-ui.zkevm-testnet.com/api",
          browserURL: "https://explorer-ui.cardona.zkevm-rpc.com/",
        },
      },
    ],
  },
  sourcify: {
    enabled: true, // Enable Sourcify verification
  },
};

export default config;