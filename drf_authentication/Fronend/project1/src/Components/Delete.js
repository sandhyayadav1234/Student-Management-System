import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import sutentPic from './Images/student.jpg'


function Delete() {

    const access=sessionStorage.getItem('access')
    const refersh=sessionStorage.getItem('refresh')
   
    const {userId}=useParams()
    const [user,SetUser]=useState({})
    const navigate=useNavigate()
    console.log(userId)
    async function FetchDetail(){
        if(access){
            const result= await axios.get(`http://127.0.0.1:8000/app1/post/${userId}/`,{
                headers: {Authorization:'Bearer'+" "+access}
                
                });
                console.log('Bearer'+" "+access)
                console.log(result.data)
                SetUser(result.data)
    
                }
        else{
                    navigate('/Login')
                }

    

    }
    function Delete(){
        // console.log(data)
        if (access){
            axios.delete(`http://127.0.0.1:8000/app1/post/${userId}/`,{
            headers: {Authorization:'Bearer'+" "+access}
            
            });
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




   <form onSubmit={Delete} >
    <center><h1 style={{color:'white'}}> Do you want to Delete <span style={{color:'orange'}}>{user.name}</span> record ???</h1>
    <input type='submit' value='Yes' className='btn btn-warning'></input>&nbsp;
    <NavLink to='/Show' className='btn btn-danger'><button>No</button> </NavLink>
    </center>
   </form>
 </div>
   </>
  )
}

export default Delete