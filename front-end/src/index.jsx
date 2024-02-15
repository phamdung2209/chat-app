import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import store from './redux/store'
import { Provider } from 'react-redux'

import App from './App.jsx'
import GlobalStyles from './components/GlobalStyles/GlobalStyles.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GlobalStyles>
            <Provider store={store}>
                <App />
            </Provider>
            <Toaster />
        </GlobalStyles>
    </React.StrictMode>,
)
