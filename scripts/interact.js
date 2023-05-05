const { ethers } = require("ethers");
const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const contract = require("/home/dbettaieb/Desktop/RentableNft/artifacts/contracts/RentableNft.sol/RentableNft.json");

// provider - infura
 infuraProvider = new ethers.providers.InfuraProvider(network="sepolia");

// signer - you
const signer = new ethers.Wallet(PRIVATE_KEY, infuraProvider);

// contract instance
const rentablenftcontract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
await rentablenftcontract.mint();    
const balance = await rentablenftcontract.balanceOf("0x6ef69c99a333fef7DdBb6E37efF0b0081BC3fBBE");
console.log(balance);



}

main();