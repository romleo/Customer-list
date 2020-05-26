import React from 'react';
import List from './components/List';
import User from './components/User';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Switch>
                    <Route path='/' exact component={List}/> 
                    <Route path='/List' component={List}/> 
                    <Route path="/User/:id" component={User}/>
                </Switch>
            </div>
        </BrowserRouter>)
}

export default (App);