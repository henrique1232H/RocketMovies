import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home'
import Global from './styles/global'
import { ThemeProvider } from 'styled-components'
import style from './styles/style'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={style}>
      <Global/>
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
)
