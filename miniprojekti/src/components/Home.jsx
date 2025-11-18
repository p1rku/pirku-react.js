import { useState } from 'react'
import './Home.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
      <div>
        <img src="nature.jpg" alt="" />
        <h1>Nature
          <p>Nature is the natural, physical, or material world or universe.</p>
        </h1>
        
      </div>
      <div>
        <img src="nature.jpg" alt="" />
        <h1>Nature
          <p>Nature is the natural, physical, or material world or universe.</p>
        </h1>
        
      </div>
      <div>
        <img src="nature.jpg" alt="" />
        <h1>Nature
          <p>Nature is the natural, physical, or material world or universe.</p>
        </h1>
        
      </div>
      </div>

    </>
  )
}

export default Home