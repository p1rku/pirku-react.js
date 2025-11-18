import { useState } from 'react'

function Contact() {
  const [fname, setFname] = useState('John')
  const [lname, setLname] = useState('Doe')

  const handleSubmit = (e) => {
    e.preventDefault()
    // replace with real submit logic
    alert(`Submitted: ${fname} ${lname}`)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First name:</label>
        <input
          type="text"
          id="fname"
          name="fname"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        <label htmlFor="lname">Last name:</label>
        <input
          type="text"
          id="lname"
          name="lname"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default Contactx
