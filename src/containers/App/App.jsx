import React, { Component, PropTypes } from 'react';
import './App.scss';

import { Switch, Route, Router } from 'react-router-dom'
import Header from '../../components/Header/Header';
import Page from '../Page/Page';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article className='app__container container'>
                <Header {...this.state} />
                <div className='d-flex justify-content-center'>
                <div className='jumbotron bg-dark w-75'>
                <Switch>
                    <Route exact path='/' render={(props) => (
                        <Page {...props} />
                    )} />
                </Switch>
                </div>
                </div>
            </article >
        );
    }
}
