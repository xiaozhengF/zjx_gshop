import vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'

vue.use(VueRouter)
export default new VueRouter({
    routes:[
        {
            path:"/",
            redirect:'/Msite'
        },
        {
            path:"/Msite",
            component:Msite,
            meta:{
                showFoot:true
            }
        },
        {
            path:"/Order",
            component:Order,
            meta:{
                showFoot:true
            }
        },
        {
            path:"/Profile",
            component:Profile,
            meta:{
                showFoot:true
            }
        },
        {
            path:"/Search",
            component:Search,
            meta:{
                showFoot:true
            }
        },
        {
            path:"/Login",
            component:Login
        },

    ]
})