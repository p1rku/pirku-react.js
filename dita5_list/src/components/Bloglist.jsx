import React from 'react'

function Bloglist(props) {
    const list = props.list
    const deletebutton  = props.deletebutton
    const viewbutton  = props.viewbutton
  return (
    <>
    {list.map((item) => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <p>Age: {item.age}</p>
                    <p>City: {item.city}</p>
                    <button onClick={() => deletebutton(item.id)}>Delete</button>
                     <button onClick={() => viewbutton(item.id)}>View</button>
                    <hr />
                </div>
            ))}
    </>
  )
}

export default Bloglist