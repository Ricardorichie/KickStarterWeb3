// const HDWalletProvider = require("truffle-hdwallet-provider");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
// const { interface, bytecode } = require("./compile");
const compiledFactory = require("./build/CampaignFactory.json");
const mneumonic = "";
const provider = new HDWalletProvider(
  mneumonic,
  "https://rinkeby.infura.io/v3/046198ae63034b209694da840475ca54"
);
const web3 = new Web3(provider);
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attempting to deploy from the account", accounts[2]);
  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({
      data: compiledFactory.bytecode,
    })
    .send({ from: accounts[2], gas: "1000000" });
  //i used the 3 element because that account contains my test ether
};
deploy();
