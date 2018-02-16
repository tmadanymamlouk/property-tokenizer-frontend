import React, { Component, PropTypes } from 'react';
import './Page.scss';

import ApiService from '../../services/ApiService'
import ContractService from '../../services/ContractService'

export default class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: null
        }
    }

    componentDidMount() {
        let helloCallback = (error, result) => {
            this.setState({
                response: result
            });
        }
        ContractService.hello(helloCallback);
    }

    componentDidUpdate(prevProps) {
    }

    render() {

        return (
            <section className='examplePage__container'>
                Contract says '{this.state.response}'
            </section >
        );
    }
}