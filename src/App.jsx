import { Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './screens/Home'
import { Login } from './screens/Login'
import { Register } from './screens/Register'
import { Forgot } from './screens/Forgot'

export const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/forgot' element={<Forgot></Forgot>}></Route>
        <Route path='/*' element={<Navigate to='/' />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  )
}
