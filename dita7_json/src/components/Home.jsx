import React,{useState,useEffect} from 'react'
// import './Home.css'
import BlogList from './Bloglist'
import Bloglist from './Bloglist';


function Home() {
    const [list, setList] = useState([]);
    const [error, setError] = useState([]);
    useEffect(() => {
        fetch("http://localhost:300/list")
        .then((res) => 
          res.json()
      )
        .then((data) =>
           setList(data)
        )
        .catch((error) => 
          setError(error.message)
      );
    }, []);
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
    {error ? (
        <p style={{ color: 'red' }}>Error: {error}</p>
      ) : (
        <BlogList list={list} deletebutton={deletebutton} viewbutton={viewbutton} />
      )}
    </>
  );
}

export default Home