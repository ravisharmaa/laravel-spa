import {setHttpToken} from "../../../helpers/";
import {isEmpty} from 'lodash'
import localforage from 'localforage'

export const register = ({dispatch}, {payload, context}) => {
    return axios.post('/api/register',payload.formData).then((response) => {
        dispatch('setToken',response.data.meta.token).then(() => {
            dispatch('fetchUser')
        })
    }).catch((error) => {
        context.errors = error.response.data.errors
    })

};
export const login = ({dispatch},{payload,context}) => {
    return axios.post('/api/login',payload.formData).then((response) => {
        dispatch('setToken',response.data.meta.token).then(() => {
            dispatch('fetchUser')
        })
    }).catch((error) => {
        context.errors = error.response.data.errors
    })

};

export const setToken = ({commit,dispatch}, token) => {
    if(isEmpty(token)){
           return dispatch('checkTokenExists').then((token) => {
                setHttpToken(token)
        })
    }
    commit('settingToken',token);
    setHttpToken(token);
};

export const checkTokenExists = ({commit}, token) => {
     return localforage.getItem('authToken').then((token) => {
        if(isEmpty(token)){
            return Promise.reject("NO TOKEN AVAILABLE")
        }
        return Promise.resolve(token)
    })
};


export const fetchUser = ({commit}) =>{
    return axios.get('api/me').then((response) => {
       commit('setAuthenticated',true);
       commit('setUserData',response.data.data)
    })
};

export const clearAuth = ({commit}) => {
    commit('setAuthenticated',false);
    commit('setUserData',null);
    commit('settingToken',null);
    setHttpToken(null);

};