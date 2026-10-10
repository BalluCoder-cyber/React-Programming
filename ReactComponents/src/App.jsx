import './App.css'
import './showHello/hello.jsx'
import Hello from './showHello/hello.jsx'

function App() {
  let option  = ["Balwant","Ankesh","Sonu","Durgesh","kajal"];
  let obj = {name:"balwant"};
  return (
    <div className='appdiv'>
    <Hello arr={option}></Hello>
    {/* <Hello userName="Ankesh" color="orange"></Hello> */}
    </div>
  )
}

export default App
