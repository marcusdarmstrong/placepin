import { createStore } from 'redux';
import { ReactDOM } from 'react-dom';
import React from 'react';
import reducer from './reducer';
import { Provider } from 'react-redux';
import PlacePinMap from './PlacePinMap';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <PlacePinMap />
    </Provider>
    ,
    document.getElementById('map')
);
