import { HardhatUserConfig } from "hardhat/config"
import { NetworkUserConfig } from "hardhat/types"
// hardhat plugin
import "@nomiclabs/hardhat-ethers"
import "@nomiclabs/hardhat-etherscan"
import "@nomicfoundation/hardhat-toolbox"

import { config as dotenvConfig } from "dotenv"
import { resolve } from "path"
import { loadTasks } from "./scripts/helpers/hardhatConfigHelpers"

dotenvConfig({ path: resolve(__dirname, "./.env") })

const taskFolder = ["tasks"]
loadTasks(taskFolder)

const chainIds = {
  ganache: 1337,
  goerli: 5,
  sepolia: 11155111,
  hardhat: 31337,
  mainnet: 1,
  quorum: 570,
}

// Ensure that we have all the environment variables we need.
const pk: string | undefined = process.env.PRIVATE_KEY
if (!pk) {
  throw new Error("Please set your pk in a .env file")
}

const infuraApiKey: string | undefined = process.env.INFURA_API_KEY
if (!infuraApiKey) {
  throw new Error("Please set your INFURA_API_KEY in a .env file")
}

function getChainConfig (chain: keyof typeof chainIds): NetworkUserConfig {
  let jsonRpcUrl: string
  switch (chain) {
    case "quorum":
      jsonRpcUrl = process.env.NETWORK_URL || ""
      break
    default:
      jsonRpcUrl = `https://${chain}.infura.io/v3/${infuraApiKey}`
  }
  return {
    accounts: [`0x${pk}`],
    chainId: chainIds[chain],
    url: jsonRpcUrl,
  }
}

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      // TODO: SHOULD BE REMOVED! 
      allowUnlimitedContractSize: true,
      chainId: chainIds.hardhat,
    },
    local: {
      url: "http://127.0.0.1:8545",
    },
    goerli: getChainConfig("goerli"),
    sepolia: getChainConfig("sepolia"),
    mainnet: getChainConfig("mainnet"),
    quorum: getChainConfig("quorum"),
  },
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    compilers: [
      {
        version: "0.8.20",
      },
    ],
    settings: {
      metadata: {
        // Not including the metadata hash
        // https://github.com/paulrberg/hardhat-template/issues/31
        bytecodeHash: "none",
      },
      // Disable the optimizer when debugging
      // https://hardhat.org/hardhat-network/#solidity-optimizer-support
      optimizer: {
        enabled: true,
        runs: 800,
        details: { yul: false }
      },
    },
  },
  etherscan: {
    apiKey: {
      goerli: process.env.ETHERSCAN_API_KEY || "",
      sepolia: process.env.ETHERSCAN_API_KEY || "",
      mainnet: process.env.ETHERSCAN_API_KEY || "",
      quorum: "NO_API_KEY",
    },
    customChains: [{
      network: "quorum",
      chainId: chainIds.quorum,
      urls: {
        apiURL: `${process.env.BLOCKSCOUT_URL}/api`,
        browserURL: process.env.BLOCKSCOUT_URL as string,
      },
    }],
  },

  gasReporter: {
    currency: "USD",
    gasPrice: 100,
    enabled: process.env.REPORT_GAS as string === "true",
    excludeContracts: [],
    src: "./contracts",
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v5",
  },
}

export default config
