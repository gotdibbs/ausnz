import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { loadItinerary } from './actions';
import reducer from './reducers';
import App from 'components/App/app';

const mountNode = document.getElementById('root');

const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);

render(
    <Provider store={store}>
        <App />
    </Provider>, 
    mountNode
);

store.dispatch(loadItinerary());