import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import 'simplebar-react/dist/simplebar.min.css'
import 'flatpickr/dist/themes/light.css'
import '../src/assets/scss/app.scss'
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { Provider } from 'react-redux'
import { store } from './store/index.js'
import { ToastContainer } from 'react-toastify'

import '../src/18n'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <ToastContainer />
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </Provider>
    </BrowserRouter>
  </>
)
