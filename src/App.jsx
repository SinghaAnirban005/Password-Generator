import { useCallback, useState, useEffect } from 'react'
import './App.css'

function App() {

  const [password, setPassword] = useState("null")
  const [length, setLength] = useState(7)
  const [num, setNum] = useState(false);

  const passwordGenerator = useCallback(() => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      let digits = '0123456789'

      if(num) str += digits

      for(let i = 0; i < length ; i++){
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
      }


      setPassword(pass)

  }, [length])

  
  const allowNumbers = () => {
    setNum((val) => !val)
  }


  useEffect(() => {
    passwordGenerator()
  }, [length, setPassword, num, setNum])


  return (
    <div className = "d">
      <div className = 'd1'>
        <h1 className = 'h1'>
          PASSWORD GENERATOR
        </h1>

        <input className="in1" type='text' readOnly value={password} />

      <div className = 'd2'>
      <input type="range" min={5} max={12} 
        value = {length} onChange={(e) => setLength(e.target.value)} className='in2'/>
        
        <h3>({length})</h3>

        <input className = "in3" type='checkbox' value={num} onChange={() => allowNumbers()} />
        <label>Numbers</label>
      </div>


      
      </div>

    </div>
  )
}

export default App
