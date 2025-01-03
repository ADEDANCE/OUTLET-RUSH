import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/style/style.css'
import Acconts from './welcome-paages/Acconts.jsx'
import Wmessage from './welcome-paages/Wmessage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Acconts /> */}
    <Wmessage />
  </StrictMode>,
)
