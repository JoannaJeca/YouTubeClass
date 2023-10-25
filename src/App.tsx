import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { MainRouter } from './Route/MainRouter'

function App() {
  return(
  <>
  <RouterProvider router={MainRouter}/>
  </>
  )
}

export default App
