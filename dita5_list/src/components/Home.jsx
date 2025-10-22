import React,{useState} from 'react'
// import './Home.css'
import BlogList from './Bloglist'
import Bloglist from './Bloglist';

function Home() {
    const [list, setList] = useState([
        {id: 1, name: "Amaar", age: 15, city: "Prizren"},
        {id:2, name: "Maar",age: "Unknown",city: "Unknown"},
        {id:3, name: "Pirku",age: 15,city: "Prizren"}

    ]);
    const deletebutton = (id) => {
        const newlist = list.filter((item) => item.id !== id);
        setList(newlist);
    }

    const viewbutton = (id) => {
        const newlist = list.filter((item) => item.id === id);
        setList(newlist);
    }
   
  return (
    <>
    <h1>Welcome to the Home Page</h1>
       <Bloglist list={list} deletebutton={deletebutton} viewbutton={viewbutton} />
    </>
  )
}

export default Home