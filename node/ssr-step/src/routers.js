import App from './App'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
export default [
    {
        path: '/',
        component: App,
        routes:[
            {
                path: '/',
                component: Home,
                loadData: Home.loadData,
                exact: true
            },
            {
                path: '/login',
                component: Login
            }
        ]
    }
]