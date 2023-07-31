import axios from 'axios'
import React from 'react'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import sutentPic from './Images/student.jpg'


function Login() {
    const {register,handleSubmit}=useForm()
     const navigate=useNavigate()
    async function Savadata(data){
        const result= await axios.post('http://127.0.0.1:8000/access/',data)
        sessionStorage.setItem('access',result.data.access)
        sessionStorage.setItem('refresh',result.data.refresh)
    navigate('/Form')
    
    }
  
  return (
    
   <>
     <div style={{
        width:'800',
        height:'100vh',
       
        backgroundImage:`url(${sutentPic})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
       

      }}>


  <form onSubmit={handleSubmit(Savadata)} className='container'>
   <div>
   <label  htmlFor='un'><b style={{color:'orange'}}>Username</b></label>
   <input type='un' id='un' name='un'
   {...register('username')} className='form-control'></input>
   <br></br>
   <label  htmlFor='un'> <b style={{color:'orange'}}>Password</b></label>
   <input type='un' id='un' name='un'
   {...register('password')} className='form-control'></input>
   <br></br>
   <center><input type='submit' className='btn btn-warning'></input></center>
   </div>
   </form>
   </div>
   </>

  )
}

export default Login