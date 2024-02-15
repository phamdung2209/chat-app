import Home from '../pages/Home'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import config from '../config'

const publicRoutes = [
    { path: config.routes.signIn, component: Login, exact: true },
    { path: config.routes.signUp, component: SignUp, exact: true },
]

const privateRoutes = [
    { path: config.routes.home, component: Home, exact: true },
    // {path: '/messages', component: Messages, exact: true},
    // {path: '/messages/:id', component: MessageContainer, exact: true},
    // {path: '/profile', component: Profile, exact: true},
    // {path: '/settings', component: Settings, exact: true},
    // {path: '/logout', component: Logout, exact: true},
]

export { publicRoutes, privateRoutes }
