const Web3 = require('web3');
const PropertyTokenizerABI = require('./PropertyTokenizer.json');
const ShareABI = require('./Share.json');

const PROPERTYTOKENIZER_CONTRACT_ADDRESS = '0x4e72770760c011647d4873f60a3cf6cdea896cd8';
const SHARE_CONTRACT_ADDRESS = '0xeec918d74c746167564401103096d45bbd494b74';
const NODE_URL = 'http://localhost:7545';

class ContractService {

    constructor() {
        if (typeof web3 !== 'undefined') {
            this.web3 = new Web3(web3.currentProvider);
        } else {
            this.web3 = new Web3(new Web3.providers.HttpProvider(NODE_URL));
        }

        this.web3.eth.defaultAccount = this.web3.eth.coinbase;

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
        this.ShareContractInstance.transfer(address, amount, callback);
    }

}

export default new ContractService();
