import React, {Component, PropTypes} from 'react';
import './Page.scss';

import ApiService from '../../services/ApiService'
import ContractService from '../../services/ContractService'
import BigNumber from 'bignumber.js';

export default class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: null,
            totalSupply: 0,
            balanceOf: 0,
            address: null
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
                totalSupply: new BigNumber(result).toNumber()
            });
        }

        ContractService.hello(helloCallback);
        ContractService.getTotalSupply(totalSupplyCallback);
    }

    handleChange(event) {
        this.setState({
            address: event.target.value
        });
    }

    sendSearchRequest() {
        let balanceOfCallback = (error, result) => {
            this.setState({
                balanceOf: new BigNumber(result).toNumber()
            });
        }

        console.log("send: " + this.state.address);
        ContractService.getBalanceOf(this.state.address, balanceOfCallback);
    }

    componentDidUpdate(prevProps) {
    }

    render() {

        let userShares;
        if(this.state.address){
            userShares = <p>Anzahl: {this.state.balanceOf.toString()}/{this.state.totalSupply.toString()}</p>
        }

        return (
            <section className='examplePage__container'>
                <p>Gesamtzahl aller Anteile: {this.state.totalSupply.toString()}</p>

                <p>
                    Zeige Anteile von diesem User:
                    <input onChange={this.handleChange.bind(this)} size='70'
                           value={this.state.searchTerm}/>
                    <button onClick={this.sendSearchRequest.bind(this)}>Suchen</button>
                </p>

            </section>
        );
    }
}