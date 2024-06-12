import React from 'react'
import ReactDOM from 'react-dom/client'
import Global from './styles/global'
import { ThemeProvider } from 'styled-components'
import style from './styles/style'
import Routes from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={style}>
      <Global/>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
)
