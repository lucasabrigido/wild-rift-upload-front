import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from '../components/header';
import Upload from '../pages/upload';
import Login from '../pages/login';
import Register from '../pages/register';


export default function Routes() {
    return (
        <>
            <Header/>
            <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/upload' component={Upload} />
                <Redirect to='/register' />
            </Switch>
        </>
    );
}