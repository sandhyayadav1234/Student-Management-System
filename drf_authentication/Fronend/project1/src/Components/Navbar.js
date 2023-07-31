import React from 'react'
import sutentPic from './Images/student.jpg'

function Navbar() {
  return (
   <>
    <body>
   
    <nav class="navbar navbar-expand-lg navbar-light bg-info">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="/Login">Login</a>
          <a class="nav-link" href="/Form">Form</a>
          <a class="nav-link" href="#">Logout</a>
          <a class="nav-link" href="/Show">Show</a>
          </div>
        </div>
      </div>
   
  </nav>

</body>
</>

  )
}


export default Navbar