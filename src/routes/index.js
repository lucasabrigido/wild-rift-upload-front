import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from '../components/header';
// import Upload from '../pages/upload';
import Login from '../pages/login';


export default function Routes() {
    return (
        <>
            <Header/>
            <Switch>
                <Route exact path='/' component={Login} />
                <Redirect to='/' />
            </Switch>
        </>
    );
}