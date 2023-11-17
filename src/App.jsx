import { Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './screens/Home'
import { Login } from './screens/Login'
import { Register } from './screens/Register'
import { Forgot } from './screens/Forgot'
import { Projects } from './screens/Projects'
import { Project } from './screens/Project'
import { Info } from './screens/Info'
import { Profile } from './screens/Profile'

export const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/forgot' element={<Forgot></Forgot>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/project' element={<Project></Project>}></Route>
        <Route path='/info' element={<Info></Info>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
        <Route path='/*' element={<Navigate to='/' />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  )
}
