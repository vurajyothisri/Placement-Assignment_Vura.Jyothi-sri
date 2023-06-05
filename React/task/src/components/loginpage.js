import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";



const Login=()=>{
    const [email,updateemail]=useState('')
    const [password,updatepassword]=useState('')
    const [error,updateerror]=useState(false)
    // const [dashbord,updatedashbord]=useState(false)
    const navigate=useNavigate()
   
    const FetchDetails=async()=>{
        try{
            const response = await axios.post('https://reqres.in/api/login',{email,password})
            console.log(response.data)
            navigate('/display')
           
        }
        catch{
         updateerror(true)
        }

}
    const login=(e)=>{
        e.preventDefault()
        if((email.length===0&&password.length===0)||(password.length===0)||(email.length===0)){
            alert("Fill the form First")
        }
        FetchDetails()
    }

    return(
        <>
        <form>
            <input type='email' placeholder="enter the mail" value={email} onChange={(e)=>updateemail(e.target.value)}/>
            <input type="password" placeholder='enter the password' value={password} onChange={(e)=>updatepassword(e.target.value)} />
            <button onClick={login}>Login</button>
        </form>

        
         {
            error?
            <div>Login failed</div>
            :
            ""
         }
        </>
    )
}
export default Login