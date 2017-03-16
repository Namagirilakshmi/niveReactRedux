import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import {Router,Route} from 'react-router'

import store,{history} from './store';

import App from './component/App';
import StoreTable from './component/StoreTable'

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={App}>
               <Route path='/storetable' component={StoreTable} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);