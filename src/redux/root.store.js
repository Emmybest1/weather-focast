import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from './root.reducer';

const middlerwares = [reduxThunk];
process.env.NODE_ENV === 'development' && middlerwares.push(logger);

const composeEnhancers = composeWithDevTools({name: 'redux', trace: true, realtime: true, traceLimit: 20});
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlerwares)));
console.group('DISCOVERY1 📦');
console.log('DISCOVERY1 IS LIVE 📡');
console.groupEnd();
