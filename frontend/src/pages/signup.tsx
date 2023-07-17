

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { useNavigate} from 'react-router-dom'


function signupform() {
      const navigate = useNavigate()

const [firstnameReg, setfirstnameReg] = useState("")
const [lastnameReg, setlastnameReg] = useState("")
const [usernameReg, setusernameReg] = useState("")
const [emailReg, setemailReg] = useState("")
const [phone_numberReg, setphone_numberReg] = useState("")
const [passwordReg, setpasswordReg] = useState("")

const [loginStatus, setLoginStatus] = useState("");


     const handleSubmit = (event: any) => {
          event.preventDefault();
          console.log("gg")
          Axios.post('http://localhost:4000/users/signup', {firstname:firstnameReg, lastname: lastnameReg, username: usernameReg, email:emailReg, phone_number: phone_numberReg, password:passwordReg})
                  .then((response) => {
                        console.log(response)

                        if (response.data.message){
                              setLoginStatus(response.data.message)
                              navigate('/login')
                              
                              }else{
                               setLoginStatus(response.data)    
                              } 
                  }) 
     }
            // const signup = () => {
                  

                  
            //      }



  return (
     <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
     <div className='bg-white p-3 rounded w-25'>
          <h2>Sign-Up</h2>
           <form action="" onSubmit={handleSubmit}>
             <div className='mb-3'>
                       <label htmlFor="firstname"><strong>First name</strong> </label>
                       <input type="text" placeholder='Enter First name' name='firstname'
                       onChange ={(e) => {
                        setfirstnameReg(e.target.value);
                  }} 
                        className='form-control rounded-0' required/>
                 </div>
           <div className='mb-3'>
                       <label htmlFor="lastname"><strong>Last name</strong> </label>
                       <input type="text" placeholder='Enter Last name' name='lastname'
                      onChange ={(e) => {
                        setlastnameReg(e.target.value);
                  }}
                       className='form-control rounded-0' required/>
                 </div>
                 <div className='mb-3'>
                       <label htmlFor="username"><strong>Username</strong> </label>
                       <input type="text" placeholder='Enter Username' name='username'
                      onChange ={(e) => {
                        setusernameReg(e.target.value);
                  }}
                       className='form-control rounded-0' required/>
                 </div>
                 <div className='mb-3'>
                       <label htmlFor="email"><strong>Email</strong> </label>
                       <input type="email" placeholder='Enter Email' name='email'
                      onChange ={(e) => {
                        setemailReg(e.target.value);
                  }}
                       className='form-control rounded-0' required/>
                 </div>
                 <div className='mb-3'>
                       <label htmlFor="phone_number"><strong>Phone Number</strong> </label>
                       <input type="phone_number" placeholder='Phone Number' name='phone_number'
                      onChange ={(e) => {
                        setphone_numberReg(e.target.value);
                  }}
                       className='form-control rounded-0' required/>
                 </div>
                 <div className='mb-3'>
                       <label htmlFor="password"><strong>Password</strong></label>
                       <input type="password" placeholder='Enter Password' name='password'
                      onChange ={(e) => {
                        setpasswordReg(e.target.value);
                  }}
                       className='form-control rounded-0' required/>
                 </div>
                 <button type='submit' className='btn btn-success w-100 rounded-0'>Sign Up</button>
                 <Link to="/login" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Log in</Link>
                 <h5>{loginStatus}</h5>
           </form>
           
     </div>
   </div>
  )

// return (
//       <div>
//       <div>
//            <h2>Sign-Up</h2>
//             <form action="" onSubmit={handleSubmit}>
//               <div>
//                         <label htmlFor="firstname"><strong>First name</strong> </label>
//                         <input type="text" placeholder='Enter First name' name='firstname'
//                         onChange ={(e) => {
//                          setfirstnameReg(e.target.value);
//                    }} 
//                           required/>
//                   </div>
//             <div >
//                         <label htmlFor="lastname"><strong>Last name</strong> </label>
//                         <input type="text" placeholder='Enter Last name' name='lastname'
//                        onChange ={(e) => {
//                          setlastnameReg(e.target.value);
//                    }}
//                          required/>
//                   </div>
//                   <div className='mb-3'>
//                         <label htmlFor="email"><strong>Email</strong> </label>
//                         <input type="email" placeholder='Enter Email' name='email'
//                        onChange ={(e) => {
//                          setemailReg(e.target.value);
//                    }}
//                          required/>
//                   </div>
//                   <div className='mb-3'>
//                         <label htmlFor="phone_number"><strong>Phone Number</strong> </label>
//                         <input type="phone_number" placeholder='Phone Number' name='phone_number'
//                        onChange ={(e) => {
//                          setphone_numberReg(e.target.value);
//                    }}
//                          required/>
//                   </div>
//                   <div>
//                         <label htmlFor="location"><strong>Location</strong> </label>
//                         <select name="Location" id="location" 
//                        onChange ={(e) => {
//                          setlocationReg(e.target.value);
//                    }}
//                          required>
//                      <option value="Lagos">Lagos</option>
//                    <option value="Benin">Benin</option>
//                     <option value="Abuja">Abuja</option>
//                      <option value="Kano">Kano</option>
//                 </select>
//                   </div>
//                   <div>
//                         <label htmlFor="password"><strong>Password</strong></label>
//                         <input type="password" placeholder='Enter Password' name='password'
//                        onChange ={(e) => {
//                          setpasswordReg(e.target.value);
//                    }}
//                          required/>
//                   </div>
//                   <button onClick = {signup} type='submit'>Sign Up</button>
//                   <p>You agree to our terms and policies</p>
//                   <Link to="/login">Log in</Link>
 
//             </form>
//       </div>
//     </div>
//    )
}

export default signupform