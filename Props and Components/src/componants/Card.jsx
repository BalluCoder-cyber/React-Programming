import React from 'react'
import { Bookmark } from "lucide-react";
const card = (props) => {
 
  return (
     <div className="card">
        <div className="top">
          <img src={props.companyLogo} alt="" />
          <button>Save<Bookmark /> </button>
        </div>

        <div className="center">

          <h3>{props.companyName} <span>{props.postDay}</span></h3>
          <h2>{props.jobTitle}
            <br />
            <span>{props.jobTime}</span> <span>{props.jobPosition}</span>
          </h2>

        </div>

        <div className="bottom">
          <h4>{props.salary} </h4>
          <button>Apply Now </button>

        </div>
      </div>
  )
}

export default card
