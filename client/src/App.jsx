import {useState,createContext} from 'react'
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Userform from './components/Userform'
import Filterdetails from './components/Filterdetails'
import Table from './components/Table'
import Examdetails from './components/Examdetails'
import {FaSun,FaMoon} from 'react-icons/fa'
import {Button} from 'flowbite-react'

export const Agecontext = createContext();
const App = () => {


const[data,setdata] = useState({
  name: '',
  sex:'',
  age: '',
  education: ''
})

  return (
     <div className="app">
      <Agecontext.Provider value={{data,setdata}}>       
        {/* <Button className='w-12 h-10 hidden sm:inline' color='gray' pill onClick={() => dispatch(themetoggle())}>
            {theme === 'light' ? <FaSun /> : <FaMoon />}
          </Button> */}
        <BrowserRouter>

          <Routes>
            <Route path='/' element={<Register/>} />
            <Route path='/login' element={<Login />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/form' element={<Userform/>}/>
            <Route path='/filter' element={<Filterdetails/>}/>
            <Route path='/table' element={<Table/>}/>
            <Route path='/table/:id' element={<Examdetails/>}/>
          </Routes>
        </BrowserRouter>
      </Agecontext.Provider>
     </div>
    
  )
}


export default App
