import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from './Reducers'
import middleware from './Middleware'

const store = createStore(reducer, middleware)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'))
