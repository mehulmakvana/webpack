require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import { App } from './App';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { store } from './store';

import { configureFakeBackend } from './helpers';
configureFakeBackend();

ReactDOM.render(

    <Provider store={store}>
        <App />,
    </Provider>,
    document.getElementById('app')
);

