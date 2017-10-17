import {Home} from '../components'

export default [
    {
        path:'/home',
        name:'home',
        component:Home,
        meta:{
            guest:false,
            needsAuth:true
        }
    }
]