import React,{useState} from 'react'
import './App.css'
const Calculator=()=>{
    const [value,updatevalue]=useState("0")
    const [equation,updateequation]=useState("")
    const inputfield=(e)=>{
      
        updatevalue(e.target.value);
    }
    const clicked=(e)=>{
        console.log(e)
        if(e==="="){
           let result=null
            
            
            try{
                result=eval(equation)
            }
            catch{
                result='error'
            }
            updatevalue(result.toString())
            updateequation("")

        }
        else if(e==="Ac"){
                updatevalue("0")
                updateequation("")

        }
        else{
            // updatevalue("")
            updateequation((firstone)=>
              firstone+e
            )
            
        }
    }

    return(
        <>
        <input value={value} type='text'  onChange={inputfield}/>
        <div className='flex'>
            <button onClick={()=>clicked(')')}>(</button>
            <button onClick={()=>clicked('(')}>)</button>
            <button onClick={()=>clicked('%')}>%</button>
            <button onClick={()=>clicked('Ac')}>Ac</button>
        </div>
        <div className='flex'>
            <button onClick={()=>clicked('7')}>7</button>
            <button onClick={()=>clicked('8')}>8</button>
            <button onClick={()=>clicked('9')}>9</button>
            <button onClick={()=>clicked('/')}>/</button>
        </div>
        <div className='flex'>
            <button onClick={()=>clicked('4')}>4</button>
            <button onClick={()=>clicked('5')}>5</button>
            <button onClick={()=>clicked('6')}>6</button>
            <button onClick={()=>clicked('*')}>x</button>
        </div>
        <div className='flex'>
            <button onClick={()=>clicked('1')}>1</button>
            <button onClick={()=>clicked('2')}>2</button>
            <button onClick={()=>clicked('3')}>3</button>
            <button onClick={()=>clicked('-')}>-</button>
        </div>
        <div className='flex'>
            <button onClick={()=>clicked('0')}>0</button>
            <button onClick={()=>clicked('.')}>.</button>
            <button onClick={()=>clicked('=')}>=</button>
            <button onClick={()=>clicked('+')}>+</button>
        </div>
        </>
    )
}
export default Calculator