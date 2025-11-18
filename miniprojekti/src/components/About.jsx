import { useState } from 'react'
import './About.css'

function About() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src="nature.jpg" alt="" />
        <h1>About Nature
          <p>Nature is the natural, physical, or material world or universe. Nature can refer to the phenomena of the physical world, and also to life in general. The study of nature is a large, if not the only, part of science. Although humans are part of nature, human activity is often understood as a separate category from other natural phenomena.</p>
        </h1>
      </div>
    </>
  )
}

export default About
