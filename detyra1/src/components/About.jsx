import React,{ useState} from 'react'


function About() {
    const [list, setList] = useState([
        {id: 1, name: "Arianit", age: 31, city: "Prizren"},
        {id:2, name: "Arbër",age: 29,city: "Prishtinë"},
        {id:3, name: "Ardit",age: 28,city: "Pejë"}

    ]);

  return (
    <>
    <h1>Welcome to HomePage!</h1>
    <table border="1">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
        </tr>
        <tbody>
            {list.map((item) => (
                <tr key={item.id}>
                    <th>{item.id}</th>
                    <th>{item.name}</th>
                    <th>{item.age}</th>
                    <th>{item.city}</th>
                </tr>
            ))}
        </tbody>
    </table>
    </>
  )
}

export default About