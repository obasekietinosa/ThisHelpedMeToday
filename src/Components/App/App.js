import React from 'react'
import './App.css'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <CSSReset />
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App
