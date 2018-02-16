const Web3 = require('web3');
const PropertyTokenizerABI = require('./PropertyTokenizer.json');

const PROPERTYTOKENIZER_CONTRACT_ADDRESS = '0x4e72770760c011647d4873f60a3cf6cdea896cd8';
const NODE_URL = 'http://localhost:7545';

class ContractService {

    constructor() {
        if (typeof web3 !== 'undefined') {
            this.web3 = new Web3(web3.currentProvider);

        } else {
            this.web3 = new Web3(new Web3.providers.HttpProvider(NODE_URL));
        }

        var PropertyTokenizerContract = this.web3.eth.contract(PropertyTokenizerABI);
        this.ContractInstance = PropertyTokenizerContract.at(PROPERTYTOKENIZER_CONTRACT_ADDRESS);

    }


    hello(callback){
        this.ContractInstance.hello(callback);
    }



}

export default new ContractService();