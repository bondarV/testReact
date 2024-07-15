import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { getCountries, fetchCountries, fetchCountriesFailed } from './actions'

export const BASE_URL = "https://countries.trevorblades.com/graphql";

export const getCountriesEpic = (action$) => { 
    console.log("got it");
    action$.pipe(
        ofType(fetchCountries.type),

        switchMap(() => {
            console.log('Dispatching fetchCountries'); // Логирование отправки запроса
            return from(
                fetch(BASE_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        query: `
                            query {
                                countries {
                                    name
                                    code
                                    continent {
                                        name
                                    }
                                }
                            }
                        `,
                    }),
                }).then(response => {
                    console.log('Fetch response:', response); // Логирование ответа от fetch
                    return response.json();
                })
            ).pipe(
                map((response) => {
                    console.log('Parsed response:', response); // Логирование распарсенного ответа
                    if (response.data && response.data.countries) {
                        return getCountries(response.data.countries);
                    } else {
                        throw new Error('Invalid response structure');
                    }
                }),
                catchError(error => {
                    console.error('Fetch error:', error); // Логирование ошибок
                    return of(fetchCountriesFailed(error.message));
                })
            )
        })
    );
};