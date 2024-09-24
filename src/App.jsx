import './App.css'
import { Button, Stack, TextField } from '@mui/material'
import { useState } from 'react'

function App() {

  const [interest, setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)

  const [isPrincipleInvalid, setIsPrincipleInvalid] = useState(false)
  const[isRateInvalid, setIsRateInvalid] = useState(false)
  const[isYearInvalid, setIsYearInvalid] = useState(false)

  const userInputValidation = (inputTag)=>{
    // used to validate user inputs
    const {name,value} = inputTag
    console.log(name,value);
    // check number pattern in value
    console.log(!!value.match(/^[0-9]*\.?[0-9]+$/));
    console.log(!!value.match(/^\d*\.?\d+$/));
    if(name=="principle"){
      setPrinciple(value)
      !!value.match(/^\d*\.?\d+$/) ? setIsPrincipleInvalid(false):setIsPrincipleInvalid(true)
    }else if(name=="rate"){
      setRate(value)
      !!value.match(/^\d*\.?\d+$/) ? setIsRateInvalid(false):setIsRateInvalid(true)
    }else if(name=="year"){
      setYear(value)
      !!value.match(/^\d*\.?\d+$/) ? setIsYearInvalid(false):setIsYearInvalid(true)      
    }
  }

  const handleCalculate = ()=>{
    if(principle && rate && year){
      setInterest(principle*rate*year/100)
    }else{
      alert("Please fill the form completely...")
    }
  }

  const handleReset = ()=>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setIsPrincipleInvalid(false)
    setIsRateInvalid(false)
    setIsYearInvalid(false)
  }
  return (
    <>
      <div style={{ minHeight: '100vh' }} className='d-flex justify-content-center align-items-center bg-dark'>
        <div style={{ width: '600px' }} className='bg-light rounded p-5'>
          <h3>Simple Interest Calculator</h3>
          <p>Calculate your simple interest easily..!</p>
          <div className='d-flex flex-column justify-content-center align-items-center bg-warning shadow p-3 rounded text-light'>
            <h1>₹ {interest}</h1>
            <p className='fw-bolder'>Total Simple Interest</p>
          </div>
          {/* form */}
          <form className='mt-3'>
            {/* principle */}
            <div className='mb-3'>
              <TextField value={principle || ""} onChange={e=>userInputValidation(e.target)} name='principle' className='w-100' id="outlined-principle" label="₹ Principle Amount" variant="outlined" />
            </div>{
              isPrincipleInvalid && <div className='mb-3 fw-bolder text-danger'> *Invalid Principle Amount</div>
            }
            {/* rate */}
            <div className='mb-3'>
              <TextField value={rate || ""} onChange={e=>userInputValidation(e.target)} name='rate' className='w-100' id="outlined-rate" label="Rate if interest (%)" variant="outlined" />
            </div>{
              isRateInvalid && <div className='mb-3 fw-bolder text-danger'> *Invalid Rate</div>
            }
            {/* year */}
            <div className='mb-3'>
              <TextField value={year || ""} onChange={e=>userInputValidation(e.target)} name='year' className='w-100' id="outlined-year" label="Time period (Yr)" variant="outlined" />
            </div>{
              isYearInvalid && <div className='mb-3 fw-bolder text-danger'> *Invalid Principle Amount</div>
            }
            <Stack direction="row" spacing={2}>
              <Button onClick={handleCalculate} disabled={isPrincipleInvalid || isRateInvalid || isYearInvalid} style={{ width: '50%', height: '70px' }} className='bg-dark' variant="contained">CALCULATE</Button>
              <Button onClick={handleReset} style={{ width: '50%', height: '70px' }} className='border border-dark text-dark' variant="outlined">RESET</Button>
            </Stack>
          </form>
        </div>
      </div>
    </>
  )
}

export default App