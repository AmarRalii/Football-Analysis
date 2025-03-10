import React from 'react'
import './Home.css'
import img from '../../assets/6375778.jpg'
export default function Home() {
  return (
    <div className="contact">
      <nav>
        <div className="logo">
          <img src={img} alt="" />
        </div>
        <h1>FOOTBALL  ANALYSIS</h1>
      </nav>
      <div className="container ">
      <div className="layout"></div>
              <h3>Enter Your Stats</h3>
            <form action="">
              <input type="number" placeholder="Sprint Speed" />
              <input type="number" placeholder=" Acceleration" />
              <input type="number" placeholder="Dribbling" />
              <input type="number" placeholder="Short Passing" />
              <input type="number" placeholder="Positioning" />
              <input type="number" placeholder="Long Passing" />
              <input type="number" placeholder="Finishing" />
              <input type="number" placeholder="Crossing" />
              <button type="submit" className="btn  ms-auto ">Submit </button>
            </form>
          </div>
          <footer>
            <p>Copyright 2025 . Designed by Amar. All rights reserved</p>
          </footer>
        </div>
      
    
  )
}
