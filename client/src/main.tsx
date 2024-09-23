import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

//Bootatrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import { BrowserRouter as Router } from 'react-router-dom'
import AuthProvider from './context/AuthContext.tsx'
import ToastsProvider from './context/ToastsContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <ToastsProvider>
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
    </ToastsProvider>
  </AuthProvider>
)
