import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import sutentPic from './Images/student.jpg'


function Show() {


    
    const [users,SetUser]=useState([]);
    const navigate=useNavigate();
    const access=sessionStorage.getItem('access')
    const refersh=sessionStorage.getItem('refresh')

    async function FetchDetail(){
        // console.log('Bearer' +" "+ access)
        if(access){
        const result= await axios.get('http://127.0.0.1:8000/app1/post/',{
            headers: {Authorization:'Bearer'+" "+access}
             });
             SetUser(result.data);
                
               }
               else{
            navigate('/Login')
        }
                 
                 
              
            }
        

    

    // function FetchDetail(data){
    //     if(access)
    //     {
    //     const result= axios.get('localhost:8000/app1/post/',data,{
    //         headers: {Authorization:'Bearer'+" "+access}
        
    //    }
    //     )
        
    //     SetUser(result.data)

       
    // }
    // else{
    //     navigate('/Login')
    // }
    // }

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




    <table className='table table-dark table-striped'>
       <thead>
        <tr>
            <td>Roll</td>
            <td>Name</td>
            <td>City</td>
            <td>addr</td>
            <td>phone_no</td>
            <td>Email</td>
            <td>Action</td>
            </tr>
        </thead>
        <tbody>
            {
               users.map(obj=>{
                return(
                    <tr>
                        <td>{obj.roll}</td>
                        <td>{obj.name}</td>
                        <td>{obj.addrr}</td>
                        <td>{obj.City}</td>
                        <td>{obj.Phone_no}</td>
                        <td>{obj.email}</td>
                        <td>
                            <NavLink to={`/update/${obj.roll}`}><button  className='btn btn-warning' >Update</button></NavLink>&nbsp;
                            <NavLink to={`/Delete/${obj.roll}`} ><button className='btn btn-danger'>Delete </button></NavLink>
                        </td>
                    </tr>

                )
               }
               )
            }
            </tbody>

               
        
        
       
        
       
    </table>
    </div>
    </>
  )
}

export default Show;