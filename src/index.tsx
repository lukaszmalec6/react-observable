import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import Router from './router';
import {Provider} from 'react-redux';
import {store} from './store';

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
