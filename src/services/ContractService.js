const Web3 = require('web3');
const PropertyTokenizerABI = require('./PropertyTokenizer.json');
const ShareABI = require('./Share.json');

const PROPERTYTOKENIZER_CONTRACT_ADDRESS = '0x4e72770760c011647d4873f60a3cf6cdea896cd8';
const SHARE_CONTRACT_ADDRESS = '0x9fbda871d559710256a2502a2517b794b482db40';
//const NODE_URL = 'http://localhost:7545';

class ContractService {

    constructor() {
        if (typeof web3 !== 'undefined') {
            this.web3 = new Web3(web3.currentProvider);
        } else {
            this.web3 = new Web3(new Web3.providers.HttpProvider(NODE_URL));
        }

        var PropertyTokenizerContract = this.web3.eth.contract(PropertyTokenizerABI);
        var ShareContract = this.web3.eth.contract(ShareABI);
        this.PropertyTokenizerContractInstance = PropertyTokenizerContract.at(PROPERTYTOKENIZER_CONTRACT_ADDRESS);
        this.ShareContractInstance = ShareContract.at(SHARE_CONTRACT_ADDRESS);
    }

    hello(callback){
        this.PropertyTokenizerContractInstance.hello(callback);
    }

    getTotalSupply(callback){
        this.ShareContractInstance.totalSupply(callback);
    }

    getBalanceOf(address, callback){
        this.ShareContractInstance.balanceOf(address, callback);
    }

    transfer(address, amount, callback){
        console.log("address ", address);
        console.log("amount ", amount);
        this.ShareContractInstance.transfer(address, amount, callback);
//        this.ShareContractInstance.helloWorld();
    }

}

export default new ContractService();