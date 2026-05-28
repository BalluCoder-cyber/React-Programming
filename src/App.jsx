import React from 'react'
import Card from './componants/Card'

const App = () => {

  const jobs = [
  {
    companyLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    jobTitle: "Senior UI/UX Designer",
    jobTime: "Full Time",
    jobPosition: "Senior",
    salary: "$220-250/h",
    postDay: "1 day ago"
  },
  {
    companyLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    jobTitle: "Frontend Developer",
    jobTime: "Part Time",
    jobPosition: "Junior",
    salary: "$120-150/h",
    postDay: "3 days ago"
  },
  {
    companyLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    jobTitle: "Product Designer",
    jobTime: "Remote",
    jobPosition: "Senior",
    salary: "$200-230/h",
    postDay: "1 week ago"
  },
  {
    companyLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    jobTitle: "Backend Engineer",
    jobTime: "Full Time",
    jobPosition: "Mid-Level",
    salary: "$180-210/h",
    postDay: "2 days ago"
  },
  {
    companyLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    jobTitle: "Motion Graphic Designer",
    jobTime: "Contract",
    jobPosition: "Senior",
    salary: "$190-240/h",
    postDay: "5 weeks ago"
  },
  {
    companyLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    jobTitle: "Cloud Engineer",
    jobTime: "Full Time",
    jobPosition: "Senior",
    salary: "$210-260/h",
    postDay: "4 days ago"
  },
  {
    companyLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    jobTitle: "Visual Designer",
    jobTime: "Hybrid",
    jobPosition: "Junior",
    salary: "$130-170/h",
    postDay: "2 weeks ago"
  },
  {
    companyLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    jobTitle: "AI Research Engineer",
    jobTime: "Full Time",
    jobPosition: "Senior",
    salary: "$250-300/h",
    postDay: "6 days ago"
  },
  {
    companyLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    jobTitle: "Software Engineer",
    jobTime: "Internship",
    jobPosition: "Junior",
    salary: "$90-120/h",
    postDay: "12 hours ago"
  },
  {
    companyLogo: "https://logo.clearbit.com/openai.com",
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
    <Card/>
   
    </div>
  )
}

export default App
