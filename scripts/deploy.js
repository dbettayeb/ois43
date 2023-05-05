async function main() {
    const rentablenft = await ethers.getContractFactory("RentableNft");
 
    // Start deployment, returning a promise that resolves to a contract object
    const rentable_nft = await rentablenft.deploy();   
    console.log("Contract deployed to address:", rentable_nft.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });