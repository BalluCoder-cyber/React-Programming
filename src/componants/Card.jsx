import React from 'react'
import { Bookmark } from "lucide-react";
const card = () => {
  return (
     <div className="card">
        <div className="top">
          <img src="https://i.pinimg.com/1200x/56/b0/c6/56b0c6950ebdc386e584107fe700f684.jpg" alt="" />
          <button>Save<Bookmark /> </button>
        </div>

        <div className="center">

          <h3>Amazon <span>1day ago</span></h3>
          <h2>Senior UI/UX Designer
            <br />
            <span>Part-Time</span> <span>Senior level</span>
          </h2>

        </div>

        <div className="bottom">
          <h4>$200-250k/h </h4>
          <button>Apply Now </button>

        </div>
      </div>
  )
}

export default card
