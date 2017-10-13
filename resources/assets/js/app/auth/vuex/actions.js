import {setHttpToken} from "../../../helpers/";

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

export const setToken = ({commit}, token) => {
    commit('settingToken',token);
    setHttpToken(token);
};

export const fetchUser = ({commit}) =>{
    return axios.get('api/me').then((response) => {
       commit('setAuthenticated',true);
       commit('setUserData',response.data.data)
    })
};