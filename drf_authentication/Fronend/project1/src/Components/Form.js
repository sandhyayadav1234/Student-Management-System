import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import sutentPic from './Images/student.jpg'

function Form() {
    const {register,handleSubmit}=useForm()
    const navigate=useNavigate()

    const access=sessionStorage.getItem('access')
    const refersh=sessionStorage.getItem('refresh')


   async function Savadata(data){
    if(access){
            await axios.post('http://127.0.0.1:8000/app1/post/',data,{
            headers: {Authorization:'Bearer'+" "+access}
       }
       )
    navigate('/Login')
 
    
    }
    else{
        
        alert("Sorry!!! only Authorized person can fill this form")
    }
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
    <label htmlFor='roll'><b style={{color:'orange'}}>Enter Roll No</b></label>
    <input type='number' id='roll' name='roll'
    {...register('roll')} className='form-control'></input>
    <br></br>
    <br></br>
    <label htmlFor='name'><b style={{color:'orange'}}>Enter Name</b> </label>
    <input type='text' id='name' name='name'
     {...register('name')} className='form-control'></input>
    <br></br>
    <br></br>
    <label htmlFor='addr'><b style={{color:'orange'}}>Enter address</b></label>
    <input type='text' id='addr' name='addr'
     {...register('addrr')} className='form-control'></input>
    <br></br>
    <br></br>
    <label htmlFor='city'><b style={{color:'orange'}}>Enter City</b></label>
    <input type='text' id='city' name='city'
     {...register('City')} className='form-control'></input>
    <br></br>
    <br></br>
    <label htmlFor='no'><b style={{color:'orange'}}>Enter Phone No</b></label>
    <input type='number' id='no' name='no'
     {...register('Phone_no')} className='form-control'></input>
    <br></br>
    <br></br>
    <label htmlFor='email'><b style={{color:'orange'}}>Enter Email</b></label>
    <input type='email' id='email'
     {...register('email')} className='form-control'></input>
    <br></br>
    <br></br>
   <center> <input type='submit' className='btn btn-warning btn-lg'></input> </center>
    </form>
    </div>
    </>
  )
}

export default Form