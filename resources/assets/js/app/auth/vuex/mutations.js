import localforage from 'localforage'
export const settoken = (state, token) => {
    console.log('there');
    localforage.setItem('authToken')
}