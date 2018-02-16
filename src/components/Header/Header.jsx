import React, { Component, PropTypes } from 'react';
import './Header.scss';

import { Link } from 'react-router-dom'

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className='header__container container p-4'>
                <h3 className='header__heading'>
                    <img className='img-fluid logo' src='assets/img/immowelt-only.png' />
                    <Link to={'/'}>
                        <p className='p-2 link'>
                            Property Tokenizer
                        </p>
                    </Link>
                </h3>
            </header>
        );
    }
}
