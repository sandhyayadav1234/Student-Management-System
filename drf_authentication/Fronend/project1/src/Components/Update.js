import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import sutentPic from './Images/student.jpg'


function Update() {
    const{userId}=useParams()
    const navigate=useNavigate()
    const {register,handleSubmit,setValue}=useForm();

    const access=sessionStorage.getItem('access')
    const refersh=sessionStorage.getItem('refresh')

    console.log(userId)
    async function FetchDetail(){
        console.log(access)
        if(access){
            const result= await axios.get(`http://127.0.0.1:8000/app1/post/${userId}/`,{
                headers: {Authorization:'Bearer'+" "+access}
                 });
                 setValue('roll',result.data.roll)
                 console.log(result.data)
                 setValue('name',result.data.name)
                 setValue('addrr',result.data.addrr)
                 setValue('City',result.data.City)
                 setValue('Phone_no',result.data.Phone_no)
                 setValue('email',result.data.email)
                    
                   }
                   else{
                navigate('/Login')
            }
    }

    async function Savadata(data){
        if(access){
            const result= await axios.put(`http://127.0.0.1:8000/app1/post/${userId}/`,data,{
                headers: {Authorization:'Bearer'+" "+access}
                
                 });
                 console.log(result.data)
       
                navigate('/Show')
                }
        else{
                    navigate('/Login')
                }


    }
    useEffect(()=>{FetchDetail();},[])
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

export default Update