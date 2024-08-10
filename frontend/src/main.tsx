import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.tsx'
import {Toaster} from 'react-hot-toast'
import axios from 'axios'

axios.defaults.baseURL= "https://gpt-bot-backend.vercel.app/api/v1";//backednURL
axios.defaults.withCredentials= true;


const theme = createTheme({
  typography: {
    fontFamily: "Roboto Slab, Serif",
    allVariants: { color: "white" },
  }
})
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Toaster position="bottom-right"/>
        <App />
      </ThemeProvider>
    </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
)
