import React from 'react'
import Card from './componants/Card'

const App = () => {

  const jobs = [
    {
      companyLogo: "https://i.pinimg.com/736x/87/c5/6b/87c56b555a214bac98bbcd2aea10a329.jpg",
      companyName: "Google",
      jobTitle: "Senior UI/UX Designer",
      jobTime: "Full Time",
      jobPosition: "Senior",
      salary: "$220-250/h",
      postDay: "1 day ago"
    },
    {
      companyLogo: "https://i.pinimg.com/736x/99/e8/d6/99e8d6526f09705b853091106ba1151a.jpg",
      companyName: "Apple",
      jobTitle: "Frontend Developer",
      jobTime: "Part Time",
      jobPosition: "Junior",
      salary: "$120-150/h",
      postDay: "3 days ago"
    },
    {
      companyLogo: "https://i.pinimg.com/736x/c8/b2/d8/c8b2d8dc597e885923033773187f1f6c.jpg",
      companyName: "Meta",
      jobTitle: "Product Designer",
      jobTime: "Remote",
      jobPosition: "Senior",
      salary: "$200-230/h",
      postDay: "1 week ago"
    },
    {
      companyLogo: "https://i.pinimg.com/736x/32/4a/90/324a90ab3638842fc9dc738f9b65f198.jpg",
      companyName: "Amazon",
      jobTitle: "Backend Engineer",
      jobTime: "Full Time",
      jobPosition: "Mid-Level",
      salary: "$180-210/h",
      postDay: "2 days ago"
    },
    {
      companyLogo: "https://i.pinimg.com/1200x/72/a0/50/72a0500ff35991d147a6b48e4bffc721.jpg",
      companyName: "Netflix",
      jobTitle: "Motion Graphic Designer",
      jobTime: "Contract",
      jobPosition: "Senior",
      salary: "$190-240/h",
      postDay: "5 weeks ago"
    },
    {
      companyLogo: "https://i.pinimg.com/736x/15/cf/7f/15cf7f65d56e8fcf16fa08e45ceae81d.jpg",
      companyName: "Microsoft",
      jobTitle: "Cloud Engineer",
      jobTime: "Full Time",
      jobPosition: "Senior",
      salary: "$210-260/h",
      postDay: "4 days ago"
    },
    {
      companyLogo: "https://i.pinimg.com/1200x/e2/09/b7/e209b77c8cd61d49528fbb50f89538a1.jpg",
      companyName: "Adobe",
      jobTitle: "Visual Designer",
      jobTime: "Hybrid",
      jobPosition: "Junior",
      salary: "$130-170/h",
      postDay: "2 weeks ago"
    },
    {
      companyLogo: "https://i.pinimg.com/1200x/3c/16/69/3c166947763be9a6a9e2be1416447f00.jpg",
      companyName: "NVIDIA",
      jobTitle: "AI Research Engineer",
      jobTime: "Full Time",
      jobPosition: "Senior",
      salary: "$250-300/h",
      postDay: "6 days ago"
    },
    {
      companyLogo: "https://i.pinimg.com/736x/aa/77/df/aa77df8c0f8037db6290680a9ef861a1.jpg",
      companyName: "Tesla",
      jobTitle: "Software Engineer",
      jobTime: "Internship",
      jobPosition: "Junior",
      salary: "$90-120/h",
      postDay: "12 hours ago"
    },
    {
      companyLogo: "https://i.pinimg.com/1200x/e2/8d/e6/e28de644cf5db33db1d2447bc13aacd3.jpg",
      companyName: "OpenAI",
      jobTitle: "Machine Learning Engineer",
      jobTime: "Remote",
      jobPosition: "Senior",
      salary: "$280-350/h",
      postDay: "3 weeks ago"
    }
  ];

 
  return (
     
    <div className='parent'>
      {jobs.map(function (elem,idx) {
        return <Card key={idx} companyLogo={elem.companyLogo} companyName={elem.companyName} jobTitle={elem.jobTitle} jobTime={elem.jobTime} salary={elem.salary} jobPosition={elem.jobPosition}  postDay={elem.postDay} />
      })}

    </div>
  )
}

export default App

