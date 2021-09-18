import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from '../components/header';
import Upload from '../pages/upload';


export default function Routes() {
    return (
        <>
            <Header/>
            <Switch>
                <Route exact path='/' component={Upload} />
                <Redirect to='/' />
            </Switch>
        </>
    );
}