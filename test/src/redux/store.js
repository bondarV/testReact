import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { countriesReducer } from './reducers/CountriesReducer'
import { getCountriesEpic } from './epics'

const epicMiddleware = createEpicMiddleware();
const rootEpic = combineEpics(getCountriesEpic);

const rootReducer = combineReducers({
    countries: countriesReducer,
});

const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpic);

export default store;