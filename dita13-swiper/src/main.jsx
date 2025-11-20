import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Swiper from './Swiper2.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Swiper />
  </StrictMode>,
)
