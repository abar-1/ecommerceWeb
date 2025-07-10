import { takeLatest, all, call, put } from 'redux-saga/effects';

import { getCategoriesAndDocuments } from '@/utils/firebase/firebase.utils';

import { fetchCategoriesSuccess, fetchCategoriesFailed } from './categories.action';

import { CATEGORIES_ACTION_TYPES } from './categories.types';


export function* fetchCategoriesAsync() {
    try{
        const categoriesArray = yield call(getCategoriesAndDocuments);
        //put=generator version of dispatch
        yield put (fetchCategoriesSuccess(categoriesArray));
    }catch(error){
        yield put(fetchCategoriesFailed(error));
    }
}

//triggers when we call fetchCategoriesStart()
export function* onFetchCategories() {
    //whenever we take the latest fetch_cat_start action, call this function
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}

//holds all of sagas
export function* categoriesSaga() {
    //listen to onFetchCategories
    yield all([call(onFetchCategories)]);
}