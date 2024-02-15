import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { publicRoutes, privateRoutes } from './routes/routes'
import config from './config'

function App() {
    // const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)

    console.log('auth:', auth)
    const isAuthenticated = auth.auth
    return (
        <div className="p-4 h-screen flex items-center justify-center">
            <Router>
                <Routes>
                    {isAuthenticated
                        ? privateRoutes.map((route, index) => {
                              let Page = route.component
                              const paths = privateRoutes.map((route) => route.path)

                              if (!paths.includes(window.location.pathname)) {
                                  window.location.href = config.routes.home
                              }

                              return <Route key={index} path={route.path} element={<Page />} />
                          })
                        : publicRoutes.map((route, index) => {
                              let Page = route.component
                              const paths = publicRoutes.map((route) => route.path)

                              if (!paths.includes(window.location.pathname)) {
                                  window.location.href = config.routes.signIn
                              }

                              return <Route key={index} path={route.path} element={<Page />} />
                          })}
                </Routes>
            </Router>
        </div>
    )
}

export default App
