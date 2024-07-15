import { GET_COUNTRIES, FETCH_COUNTRIES, FETCH_COUNTRIES_FAILED } from './types';

export const getCountries = (countries) => ({
    type: GET_COUNTRIES,
    payload: countries
});

export const fetchCountries = () => ({
    type: FETCH_COUNTRIES
});

export const fetchCountriesFailed = (error) => ({
    type: FETCH_COUNTRIES_FAILED,
    payload: error
});