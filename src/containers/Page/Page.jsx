import React, { Component, PropTypes } from 'react';
import './Page.scss';

import ApiService from '../../services/ApiService'
import ContractService from '../../services/ContractService'
import BigNumber from 'bignumber.js';

export default class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: null,
            totalSupply: 0
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

    componentDidUpdate(prevProps) {
    }

    render() {
        console.log(this.state);
        return (
            <section className='page'>
                <p>{this.state.response}</p>
                <p>Total number of shares: {this.state.totalSupply.toLocaleString()}</p>
            </section >
        );
    }
}
