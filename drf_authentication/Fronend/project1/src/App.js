import './App.css';
import Form from './Components/Form';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Show from './Components/Show';
import Update from './Components/Update';
import Delete from './Components/Delete';

function App() {
  return (
   <>
   <BrowserRouter>
   
   <Navbar/>
   <Routes>
    <Route path='/Form' element={<Form/>}></Route>
    <Route path='/Login' element={<Login/>}></Route>
    <Route path='/Show' element={<Show/>}></Route>
    <Route path='/Update/:userId' element={<Update/>}></Route>
    <Route path='/Delete/:userId' element={<Delete/>}></Route>
   </Routes>

   
   </BrowserRouter>
   </>
  )}
      

export default App;
