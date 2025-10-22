import React from 'react'

function Home() {
  
    const name = "You";
    const fun = () => {
        console.log("This is a function inside Home component");
    }
    const fun2 = (x) => {
        console.log("hello " + x);
        console.log(`Hello ${x}`);
        
    }
    const shume = (x, y) => {
        return(x + y);
    }
        return (
    <>
        <h1>sdi</h1>
        <p>Welcome {name}</p>
        <p>{fun()}</p>
        <button onClick={fun}>Kliko</button>
        <button onClick={() => fun2("You")}>Kliko2</button>
        <br />
        <p>Shuma eshte: {shume(5, 10)}</p>
        <button onClick={() => shume (5, 10)}>Shuma</button>
    </>
  )
}

export default Home