import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "./store";
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-daterangepicker/daterangepicker.css';

const store = createStore(reducers);

ReactDOM.render(<Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);