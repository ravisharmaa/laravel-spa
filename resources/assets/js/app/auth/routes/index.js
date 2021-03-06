import {Login,Register} from "../components";

export default [
    {
        path:'',
        name:'login',
        component: Login,
        meta:{
            guest:true,
            needsAuth:false
        }
    },

    {
        path:'/register',
        name:'register',
        component: Register,
        meta:{
            guest:true,
            needsAuth:false
        }
    },
]