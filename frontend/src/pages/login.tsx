

// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import Axios from 'axios'
// import { useNavigate} from 'react-router-dom'

// function login() {

// const navigate = useNavigate()

// const [email, setemail] = useState("")
// const [password, setpassword] = useState("")

// const [loginStatus, setLoginStatus] = useState("");

// const handleSubmit = (event: any) => {
//       event.preventDefault();
      
//       navigate('/profile')
// }

//       const login = () => {
//             Axios.post('http://localhost:4000/users/login', {email:email, password:password})
//             .then((response) => {
               
//                   console.log(response)

//                   if (response.data.message){
//                   setLoginStatus(response.data.message)
                  
//                   }else{
//                    setLoginStatus(response.data)    
//                   }             
//             }) 
//            }
//   return (
//     <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
//       <div className='bg-white p-3 rounded w-25'>
//             <h2>Sign-In</h2>
//             <form action="" onSubmit={handleSubmit}>
//                   <div className='mb-3'>
//                         <label htmlFor="email"><strong>Email</strong> </label>
//                         <input type="email" placeholder='Enter Email' name='email'
//                       onChange ={(e) => {
//                         setemail(e.target.value);
//                   }}
//                          className='form-control rounded-0' required/>

//                   </div>
//                   <div className='mb-3'>
//                         <label htmlFor="password"><strong>Password</strong></label>
//                         <input type="password" placeholder='Enter Password' name='password'
//                       onChange ={(e) => {
//                         setpassword(e.target.value);
//                   }}
//                          className='form-control rounded-0' required/>
  
//                   </div>
//                   <button onClick={login} type='submit' className='btn btn-success w-100 rounded-0'>Log in</button>
//                   <p>You agree to our terms and policies</p>
//                   <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Sign Up</Link>
//                   <h5>{loginStatus}</h5>
//             </form>
            
//       </div>
//     </div>
//   )
// }

// export default login

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { useNavigate} from 'react-router-dom'

function loginform() {

const navigate = useNavigate()

const [email, setemail] = useState("")
const [password, setpassword] = useState("")

const [loginStatus, setLoginStatus] = useState("");

// const handleSubmit = (event: any) => {
//       event.preventDefault();
      
//       navigate('/profile')
// }

      const handleSubmit = (event: any) => {

            event.preventDefault();

            Axios.post('http://localhost:4000/users/login', {email:email, password:password})
            .then((response) => {
               
                  console.log(response)

                  if (response.data.message){
                  setLoginStatus(response.data.message)
                  navigate('/profile')
                  
                  }else{
                   setLoginStatus(response.data)    
                  }     
                          
            })
            
           }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
            <h2>Sign-In</h2>
            <form action="" onSubmit={handleSubmit}>
                  <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong> </label>
                        <input type="email" placeholder='Enter Email' name='email'
                      onChange ={(e) => {
                        setemail(e.target.value);
                  }}
                         className='form-control rounded-0' required/>

                  </div>
                  <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Password' name='password'
                      onChange ={(e) => {
                        setpassword(e.target.value);
                  }}
                         className='form-control rounded-0' required/>
  
                  </div>
                  <button onClick={handleSubmit} type='submit' className='btn btn-success w-100 rounded-0'>Log in</button>
                  <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Sign Up</Link>
                  <h5>{loginStatus}</h5>
            </form>
            
      </div>
    </div>
  )
}

export default loginform