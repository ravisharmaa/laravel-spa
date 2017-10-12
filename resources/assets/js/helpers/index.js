import {isEmpty } from 'lodash'
export const setHttpToken = (token) => {
    if(isEmpty(token)){
        window.axios.default.headers.common['Authorization'] = null;
    }
    window.axios.default.headers.common['Authorization'] = 'Bearer' + token
};