import React from 'react';
import List2 from './components/List2';
import User from './components/User';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Switch>
                    <Route path='/' exact component={List2}/> 
                    <Route path='/List2' component={List2}/> 
                    <Route path="/User/:id" component={User}/>
                </Switch>
            </div>
        </BrowserRouter>)
}

export default App;