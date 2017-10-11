import {setHttpToken} from "../../../helpers/index";

export const register = ({dispatch}, {payload, context}) => {
    return axios.post('/api/register',payload.formData).then((response) => {

    }).catch((error) => {
        context.errors = error.response.data.errors
    })

};
export const login = ({dispatch}, {payload, context}) => {
    return axios.post('/api/login',payload.formData).then((response) => {
        dispatch('setToken',response.data.meta.token).then(() => {
            console.log('fetch user');
       })
    }).catch((error) => {
        context.errors = error.response.data.errors
    })

};

export const setToken = ({commit}, token) => {
    commit('settingToken',token);
    setHttpToken(token)

};