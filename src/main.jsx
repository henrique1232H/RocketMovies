import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home'
import Global from './styles/global'
import { ThemeProvider } from 'styled-components'
import style from './styles/style'
import MoviePreview from './Pages/MoviePreview'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={style}>
      <Global/>
      <MoviePreview/>
    </ThemeProvider>
  </React.StrictMode>,
)
