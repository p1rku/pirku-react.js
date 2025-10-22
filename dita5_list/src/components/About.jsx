import React,{ useState} from 'react'


function About() {
    const [list, setList] = useState([
        {id: 1, name: "Amaar", age: 15, city: "Prizren"},
        {id:2, name: "Maar",age: 51,city: "Prizren"},
        {id:3, name: "Pirku",age: 15,city: "Prizren"}

    ]);

  return (
    <>
        <h1>Welcome to the About Page</h1>
        <div>
            {list.map((item) => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <p>Age: {item.age}</p>
                    <p>City: {item.city}</p>
                    <hr />
                </div>
            ))}
            
        </div>
    </>
  )
}
export default About