import './App.css'
import {useState} from "react";

function App() {
    const [text, setText] = useState('salut');
  return (
    <>
        <p>{text}</p>
    </>
  )
}

export default App
