import localforage from 'localforage'
import { isEmpty } from 'lodash'

export const settingToken = (state, token) => {
    if(isEmpty(token)){
        localforage.removeItem('authToken',token);
        return;
    }
    localforage.setItem('authToken',token)

};