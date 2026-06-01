import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

function App() {
  const user = [
    {
      img: 'https://images.unsplash.com/photo-1671043073957-9d2cbcabd554?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tag: 'Satisfied',
      info: 'I am very happy to take their service they give me a full seduction and i want again to take their services i want more sex.',
      count: '1',
      color:'maroon',
    },
    {
      img: 'https://images.unsplash.com/photo-1582639590011-f5a8416d1101?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
      tag: 'Underserved',
      info: ' I have also get their service and their boys are worldclass they are amazing, boys are fucked me all night.',
      count: '2',
      color:'crimson',
    },
    {
      img: 'https://images.unsplash.com/photo-1671043074053-65565e0f7c3c?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tag: 'Underbanked',
      count: '3',
      color:'purple',
      info: 'Hy guys this side sushila and a also want their service i have a lot of fun can you join me plssssss ohhhhh you must feel itt.',
    },
    {
      img: 'https://i.pinimg.com/1200x/c2/bf/05/c2bf051dcbbf381f13f096150a19c92c.jpg',
      tag: 'Satisfied',
      count: '4',
      color:'orange',
      info: 'I am very happy to announce that i have also get their service and their boys are worldclass they are amazing, boys are fucked me all night.',
    },
    {
      img: 'https://i.pinimg.com/736x/70/11/30/701130b88624fb03f7328bfdaea107e2.jpg',
      tag: 'Underserved',
      count: '5',
      color:'lightgreen',
      info: 'I am very happy to take their service they give me a full seduction and i want again to take their services i want more sex.',
    },
  ]
  return (
    <div>
      <Section1 users={user} />
    
    </div>
  )
}

export default App
