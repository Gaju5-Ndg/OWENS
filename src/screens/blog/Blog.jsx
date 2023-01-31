import React from 'react'
import { Filter } from '../../components/filter'
import NavBar from '../../components/NabBar'
import './style.css'
function Blog() {
  return (
    <>
      <NavBar />
      <Filter />
      <div className='container' style={{ marginLeft: "50px",display:"flex",flexWrap:"wrap",justifyContent:"center",  }}>

        <div style={{ width: "40%", border: "2px solid white" , marginBottom:"20px", marginRight:"20px" }}>
          <img src="https://elementor1.contempothemes.com/wp-content/uploads/2020/12/b-post-9-1.jpg" width="600px" style={{
            position: "relative",
            width: "100%",
            height: "300px",
          }} />
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "20px" }}>
            <img src='https://www.w3schools.com/howto/img_avatar.png' width="50px" height="50px" style={{ borderRadius: "50%" }} />
            <h3 style={{ marginLeft: "12px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi molestias, adipisci magni nobis aut eaq</h3>
          </div>
          <div style={{ marginLeft: "20px" }}>
            <p >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, deleniti. Ipsum beatae dolorem asperiores quibusdam blanditiis. Voluptate unde amet architecto consectetur, culpa veniam harum id, aut ducimus totam magnam sint.
            </p>
          </div>
          <div style={{ marginTop: "20px", marginBottom: "20px", marginLeft: "12px" }}>
            <button style={{ border: "none", backgroundColor: "#000066", color: "white", padding: "12px" }}>
              READ MORE
            </button>
          </div>
        </div>
        <div style={{ width: "40%", border: "2px solid white" , marginBottom:"20px", marginRight:"20px" }}>
          <img src="https://elementor1.contempothemes.com/wp-content/uploads/2020/12/b-post-9-1.jpg" width="600px" style={{
            position: "relative",
            width: "100%",
            height: "300px",
          }} />
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "20px" }}>
            <img src='https://www.w3schools.com/howto/img_avatar.png' width="50px" height="50px" style={{ borderRadius: "50%" }} />
            <h3 style={{ marginLeft: "12px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi molestias, adipisci magni nobis aut eaq</h3>
          </div>
          <div style={{ marginLeft: "20px" }}>
            <p >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, deleniti. Ipsum beatae dolorem asperiores quibusdam blanditiis. Voluptate unde amet architecto consectetur, culpa veniam harum id, aut ducimus totam magnam sint.
            </p>
          </div>
          <div style={{ marginTop: "20px", marginBottom: "20px", marginLeft: "12px" }}>
            <button style={{ border: "none", backgroundColor: "#000066", color: "white", padding: "12px" }}>
              READ MORE
            </button>
          </div>
          </div>
          <div style={{ width: "40%", border: "2px solid white" , marginBottom:"20px", marginRight:"20px" }}>
          <img src="https://elementor1.contempothemes.com/wp-content/uploads/2020/12/b-post-9-1.jpg" width="600px" style={{
            position: "relative",
            width: "100%",
            height: "300px",
          }} />
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "20px" }}>
            <img src='https://www.w3schools.com/howto/img_avatar.png' width="50px" height="50px" style={{ borderRadius: "50%" }} />
            <h3 style={{ marginLeft: "12px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi molestias, adipisci magni nobis aut eaq</h3>
          </div>
          <div style={{ marginLeft: "20px" }}>
            <p >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, deleniti. Ipsum beatae dolorem asperiores quibusdam blanditiis. Voluptate unde amet architecto consectetur, culpa veniam harum id, aut ducimus totam magnam sint.
            </p>
          </div>
          <div style={{ marginTop: "20px", marginBottom: "20px", marginLeft: "12px" }}>
            <button style={{ border: "none", backgroundColor: "#000066", color: "white", padding: "12px" }}>
              READ MORE
            </button>
          </div>
          </div>
       </div>
       
    </>
  )
}
export default Blog