import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [time , setTime] = useState(0);
  let timeRef=useRef(null);

  const startTimer=()=>{
    timeRef.current=setInterval(()=>{
      setTime((prev)=>prev+1);
    },1000)
  }
  const stopTimer=()=>{
    clearInterval(timeRef.current);
  }
  const ResetTimer=()=>{
    stopTimer();
    setTime(0);
  }

  const minutes=Math.floor(time / 60);
  const remainingSeconds = time%60;

  const newTime = ` ${minutes.toString().padStart(2 , "0")} : ${remainingSeconds.toString().padStart(2 , "0")} `;
  return (
    <>
     <div>
      <h2 >Time: <h3>{newTime} seconds</h3> </h2>
      <div>
        <button onClick={startTimer}>Start timer</button>
        <button onClick={stopTimer}>Stop timer</button>
        <button onClick={ResetTimer}>Reset timer</button>
      </div>
     </div>
    </>
  )
}

export default App
