const { ethers } = require("ethers");
const fs = require('fs');
const { execSync } = require('child_process');

const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const gasLimit = 20000000; // set a reasonable gas limit here
const contract = require("/home/dbettaieb/Desktop/RentableNft/artifacts/contracts/RentableNft.sol/RentableNft.json");
const macaddress="a0:94:1a:e4:cd:49";
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

await rentablenftcontract.setUser(4,"0xcb21123cD81A08B754735712e099a5Ed5e7748e3"
,1683341283,macaddress,{ gasLimit });
  
// Check if file exists
if (fs.existsSync('/etc/hostapd/hostapd.whitelist')) {
    // Append message to file
    fs.appendFileSync('/etc/hostapd/hostapd.whitelist', `\n${macaddress}`);
  } else {
    // Write message to file
    fs.writeFileSync('/etc/hostapd/hostapd.whitelist', `${macaddress}`);
  }
user = await rentablenftcontract.userOf(4);
console.log(user);

userexpire= await rentablenftcontract.userExpires(4);
console.log(userexpire);


//user = await rentablenftcontract.ownerOf(2);
//console.log(user);


}

main();