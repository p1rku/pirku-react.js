import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Cryptosearch from './Cryptosearch.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cryptosearch />
  </StrictMode>,
)
