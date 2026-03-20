import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Height from './Height'

createRoot(document.getElementById('root')).render(

  <StrictMode>

    <Height />

  </StrictMode>,
)
