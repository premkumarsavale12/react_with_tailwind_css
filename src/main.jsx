import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Grid_Classes from './Grid_Classes'

createRoot(document.getElementById('root')).render(

  <StrictMode>

    <Grid_Classes />

  </StrictMode>,
)
