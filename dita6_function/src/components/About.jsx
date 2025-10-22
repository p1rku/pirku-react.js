import React from   'react'
import wallpaper from '/wallpaper.jpg'

function About() {
    const p1 = {
        color: "cyan",
        fontSize: "20px",
        fontWeight: "bold",
        textDecoration: "underline"
    };
    const p2 = {
        color: "green",
        fontSize: "15px",
        fontStyle: "italic"
    };
  return (
     <>
    <h1 style={{color: "red", fontSize: "35px"}}>sdi</h1>
    <p style={p1}>Welcome to About Page</p>
    <p style={p2}>This is the About Page</p>    
    <img src={wallpaper} alt="Wallpaper" />
    <br />
    <img src="/wallpaper.jpg" alt="Wallpaper" />
    <br />
    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg" alt="sdi" />
    </>
  )
}

export default About