import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Clock from './components/Clock.jsx'
import Timer from './components/Timer.jsx'
import StopWatch from './components/StopWatch.jsx'
import FormatBlock from './components/FormatBlock.jsx'
import { DarkModeProvider } from './components/DarkModeContext.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'
      element={<App />}>
      <Route path=''
        element={
          <div>
            <Clock />
            <FormatBlock />
          </div>} />
      <Route path='stopwatch'
        element={<StopWatch />} />
      <Route path='timer'
        element={<Timer />} />
    </Route>
  ),
  {
    basename : '/Digital-Clock-Application'
  }
)

// const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <App/>,
//       children: [
//         {
//           path: "",
//           element: <Clock />,
//           errorElement : <Error/>
//         },
//         {
//           path: "about",
//           element: <StopWatch />,
//           errorElement : <Error/>
//         },
//         {
//           path: "contact",
//           element: <Timer />,
//           errorElement : <Error/>
//         }
//       ]
//     }
//   ])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeProvider>
      <RouterProvider router={router} />
    </DarkModeProvider>
  </React.StrictMode>,
)
