import api from '../../config/axios';
import { startLoading, endLoading } from '../ducks/loading';

import {
    setAllMovies,
    setMoviesMultiples,
    setMoviesTopStudios,
    setProducersInterval,
    setWinnerByYear
} from '../ducks/movies';


export const getMovies = (page, size = 206, winner, year) => {
    return dispatch => {
        const LOADING_IDENTIFICATOR = 'loadingDefault';
        dispatch(startLoading(LOADING_IDENTIFICATOR));
        api
            .get(`?page=${page}&size=${size}`, {
                params: {
                    winner,
                    year
                }
            })
            .then(res => {
                dispatch(setAllMovies(res?.data));
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                dispatch(endLoading(LOADING_IDENTIFICATOR));
            });
    };
};

export const getMultipleWinners = () => {
    return dispatch => {
        const LOADING_IDENTIFICATOR = 'loadingDefault';
        dispatch(startLoading(LOADING_IDENTIFICATOR));
        api
            .get(`?projection=years-with-multiple-winners`)
            .then(res => {
                dispatch(setMoviesMultiples(res?.data?.years));
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                dispatch(endLoading(LOADING_IDENTIFICATOR));
            });
    };
};

export const getTopStudios = () => {
    return dispatch => {
        const LOADING_IDENTIFICATOR = 'loadingDefault';
        dispatch(startLoading(LOADING_IDENTIFICATOR));
        api
            .get(`?projection=studios-with-win-count`)
            .then(res => {
                dispatch(setMoviesTopStudios(res?.data?.studios?.slice(0, 3)));
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                dispatch(endLoading(LOADING_IDENTIFICATOR));
            });
    };
};

export const getProducersInterval = () => {
    return dispatch => {
        const LOADING_IDENTIFICATOR = 'loadingDefault';
        dispatch(startLoading(LOADING_IDENTIFICATOR));
        api
            .get(`?projection=max-min-win-interval-for-producers`)
            .then(res => {
                dispatch(setProducersInterval(res?.data));
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                dispatch(endLoading(LOADING_IDENTIFICATOR));
            });
    };
};

export const getWinnerByYear = (year) => {
    return dispatch => {
        const LOADING_IDENTIFICATOR = 'loadingDefault';
        dispatch(startLoading(LOADING_IDENTIFICATOR));
        api
            .get(`?winner=true`, {
                params: {
                    year: year ? year : 0
                }
            })
            .then(res => {
                dispatch(setWinnerByYear(res?.data));
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                dispatch(endLoading(LOADING_IDENTIFICATOR));
            });
    };
};