
import './App.css';
import Layout from './components/layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Jobs from './pages/jobs';
import About from './pages/about';
import Contact from './pages/contact';
import Profile from './pages/profile';
import Login from './pages/login';
import Signup from './pages/signup';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout />}>
               <Route index element={<Home />}/>
               <Route path='jobs' element={<Jobs />}/>
               <Route path='about-us' element={<About />}/>
               <Route path='contact' element={<Contact />}/>
               <Route path='profile' element={<Profile />}/>
               <Route path='signup' element={<Signup />}/>
               <Route path='login' element={<Login />}/>



          </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
