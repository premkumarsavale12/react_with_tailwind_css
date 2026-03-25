import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Filter from './Filter'
import Interactivity from './Interactivity'
import Media_Query from './Media_Query'

createRoot(document.getElementById('root')).render(

  <StrictMode>


    <Media_Query />



  </StrictMode>,
)
