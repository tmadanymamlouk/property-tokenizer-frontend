import React, {Component, PropTypes} from 'react';
import './Page.scss';

import ApiService from '../../services/ApiService'
import ContractService from '../../services/ContractService'
// import BigNumber from 'bignumber.js';

export default class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: null,
            totalSupply: 0,
            balanceOfUser: 0,
            address: null,
            transferAmount: 0,
            receiverAddress: null
        }
    }

    componentDidMount() {
        let helloCallback = (error, result) => {
            this.setState({
                response: result
            });
        }

        let totalSupplyCallback = (error, result) => {
            this.setState({
                totalSupply: result.toString()
            });
        }

        ContractService.hello(helloCallback);
        ContractService.getTotalSupply(totalSupplyCallback);
    }

    onOwnerAddressChange(event) {
        this.setState({
            address: event.target.value
        });
    }

    transferAmountChangeHandler(event){
        this.setState({
            transferAmount: event.target.value
        });
    }

    receiverAddressChangeHandler(event){
        this.setState({
            receiverAddress: event.target.value
        });
    }

    getBalanceRequest() {
        let balanceOfCallback = (error, result) => {
            console.log(result.toString());
            this.setState({
                balanceOfUser: result.toString()
            });
        }
        ContractService.getBalanceOf(this.state.address, balanceOfCallback);
    }

    doTransfer() {
        let transferCallback = (error, result) => {
            this.setState({
                transferResult: result.toString()
            });
        }
        ContractService.transfer(this.state.receiverAddress, this.state.transferAmount, transferCallback);
    }

    componentDidUpdate(prevProps) {
    }

    render() {
        let userShares;
        let success;

        if (this.state.address) {
            userShares = <p>Anzahl: {this.state.balanceOfUser}/{this.state.totalSupply}</p>
        }
        if (this.state.transferResult){
            success = <p>Transfer ist abgeschlossen.</p>
        }

        return (
            <section className='page'>
                <p>Gesamtzahl aller Anteile: {this.state.totalSupply.toLocaleString()}</p>
                <br/>
                <br/>
                <p>
                    Zeige Anteile von diesem User:
                    <input onChange={this.onOwnerAddressChange.bind(this)} size='70'
                           value={this.state.searchTerm}/>
                    <button onClick={this.getBalanceRequest.bind(this)}>Suchen</button>
                </p>
                {userShares}

                <div>
                    <div className='daysRemainingForm__consumedDays'>
                        <span>Übertrage  </span>
                        <input onChange={this.transferAmountChangeHandler.bind(this)}
                               type="number"/>
                        <span>Anteile an</span>
                        <input onChange={this.receiverAddressChangeHandler.bind(this)}
                               size="70"/>
                    </div>
                    <button onClick={this.doTransfer.bind(this)}>Transfer</button>
                </div>
                {userShares}
                {success}

            </section>
        );
    }
}
