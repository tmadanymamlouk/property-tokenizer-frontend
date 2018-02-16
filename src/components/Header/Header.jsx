import React, { Component, PropTypes } from 'react';
import './Header.scss';

import { Link } from 'react-router-dom'

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className='header__container'>
                <h1 className='header__heading'>
                    <Link to={'/'}>
                        Immowelt Property Tokenizer
                    </Link>
                </h1>
            </header>
        );
    }
}
