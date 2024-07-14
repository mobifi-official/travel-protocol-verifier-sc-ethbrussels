import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
import "@nomicfoundation/hardhat-verify";


dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.25",
  networks: {
    polygonZkEVM: {
      url: process.env.ALCHEMY_PROJECT_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
  
  etherscan: {
    apiKey: process.env.BLOCKSCOUT_API_KEY || "placeholder", // Placeholder since BlockScout doesn't need an API key
    customChains: [
      {
        network: "polygonZkEVM",
        chainId: 1101, 
        urls: {
          apiURL: "https://zkevm.blockscout.com/api",
          browserURL: "https://zkevm.blockscout.com",
        },
      },
    ],
  },
};

export default config;