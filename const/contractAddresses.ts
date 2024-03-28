/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
/*import { Mumbai } from "@thirdweb-dev/chains";
export const NETWORK = Mumbai;


// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = "0xE8d7381F040B3A9EAb95Df33674040d04b0e606D";

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS =
  "0x32E580f9A872EaEE52625bf8911FEb6B0AcF1352";

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
export const ETHERSCAN_URL = "https://mumbai.polygonscan.com";
*/

import { Mumbai } from "@thirdweb-dev/chains";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
export const NETWORK = Mumbai;

// If used on the FRONTEND pass your 'clientId'
const sdk = new ThirdwebSDK("Mumbai", {
  clientId: "e8a3624a0736b9065e49784315f573b0",
});
// --- OR ---
// If used on the BACKEND pass your 'secretKey'


const contract = await sdk.getContract("0x32E580f9A872EaEE52625bf8911FEb6B0AcF1352");