import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store, configureBackend } from './helpers';

import { App } from './App/App';
configureBackend();
render (
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);