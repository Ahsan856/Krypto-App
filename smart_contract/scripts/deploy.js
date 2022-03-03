

const main =async () =>{

  const Transations = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transations.deploy();

  await transactions.deployed();

  console.log("Transactions deployed to:", transactions.address);
}


const runMain = async() => {
  try{
await main();
process.exit(0);
  }
  catch(error){
    console.error(error);
    process.exit(1)
  }
}
runMain();
  
