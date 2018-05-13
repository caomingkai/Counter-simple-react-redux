import App from './Counter'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';


// initial state
const initialState = { count: 0 };

// reducer
const plusAndMinus = (state, action)=>{
    const type = action.type;
    switch (type){
        case 'INC':
            return { count: state.count+1 };
        case 'DEC':
            return { count: state.count-1 };
        default:
            return state;
    }
}


const store = createStore( plusAndMinus, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
    , document.getElementById('root')
);
