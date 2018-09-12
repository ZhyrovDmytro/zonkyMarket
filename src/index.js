import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/main.scss';
import './style/components/header.scss';
import './style/components/loan.scss';
import './style/components/modal.scss';
import './style/common/button.scss';
import './style/common/spinner.scss';
import { Provider } from 'react-redux'
import configureStore from './store';

ReactDOM.render(
    <Provider store={configureStore()}>
        <App />
    </Provider>,
    document.getElementById('root')
);
