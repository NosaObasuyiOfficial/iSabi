import React from 'react'
// import images from "../assets/images/cartoon-camera-clicking-vector.jpeg"
import { useState } from 'react'
// interface 


const modal = ({ closeModal, handleModal}) => {
     const [username, setUsername] = useState('');
     const [email,setEmail] = useState('');
     const [firstname, setFirstname] = useState('');
     const [lastname, setLastname] = useState('');
     const [gender, setGender] = useState('Male');
     const [skill, setSkill] = useState('');
     const [city, setCity] = useState('');
     const [state, setState] = useState('Lagos');
     const [country, setCountry] = useState('');
     const [description, setDescription] = useState('');


     // { newUsername = setUsername }
     const handleSubmit = (e:any) => {
          e.preventDefault();     
          const data = { username, email, firstname, lastname, gender, skill, city, state, country, description }
          handleModal(data)
          localStorage.setItem("profile",JSON.stringify(data))
        
          fetch("http://localhost:4000/profile/page", {
               method: 'POST',
               headers: { "Content-Type": "application/json"},
               body: JSON.stringify(data)
          }).then(()=>{
               console.log("updated successfully")
               console.log(data)
          })
     }
     


  return<>

          <div className='de p-5 d-flex justify-content-center'>
               
               <div className="cardss p-5 ">
                    <div className='text-center p-3 d-flex flex-row justify-content-between'> 
                    <h3 className='text-center'>Input your details</h3>
                    <button className='btn d-flex text-end' onClick={()=>{
                         closeModal(false);
                    }}>X</button>
                    </div>
                    <form onSubmit={handleSubmit}>
                    <div className='line'>
                         <div>
                              <label className='p-4 fw-bolder'>Username</label>
                              <input 
                              type="text" 
                              placeholder= "username"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                              />
                         </div>
                         <div className='mx-4'>
                              <label className='p-4 fw-bolder'> Email </label>
                              <input 
                              type="text"
                              placeholder='Email'
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              />
                         </div>
                    </div>
                    <div className='line'>
                         <div>
                         <label className='p-4 fw-bolder '>Firstname</label> 
                              <input 
                              className='mb-3'
                              type="text"
                              placeholder='Firstname'
                              value={firstname}
                              onChange={(e) => setFirstname(e.target.value)}
                              />
                         </div>

                         <div className='mx-4'>
                         <label 
                              className='p-4 fw-bolder'>Lastname</label> 
                              <input 
                              type="text"
                              placeholder='Lastname'
                              value={lastname}
                              onChange={(e) => setLastname(e.target.value)}
                              />
                         </div>
               
                    </div>

                    <label className='p-4 fw-bolder'> Gender </label>
                    <select 
                         value={gender}
                         onChange={(e) => setGender(e.target.value)}>
                         <option value="Male">Male</option>
                         <option value="Female">Female</option>
                    </select>
                    <div>
                    <label className='p-4 fw-bolder'>Skill</label>
                    <input 
                    type="text"
                    placeholder='Skill'
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                    />
                    </div>
                    
                    <label className='p-4 fw-bolder'>City</label>
                    <input 
                    type="text"
                    placeholder='City'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />

                    <label className='p-4 fw-bolder'>State</label>
                    <select 
                    value={state}
                    onChange={(e) => setState(e.target.value)}>
                    <option value="Abia">Abia</option>
                    <option value="Adamawa">Adamawa</option>
                    <option value="Akwa Ibom">Akwa Ibom</option>
                    <option value="Anambra">Anambra</option>
                    <option value="Bauchi">Bauchi</option>
                    <option value="Bayelsa">Bayelsa</option>
                    <option value="Benue">Benue</option>
                    <option value="Borno">Borno</option>
                    <option value="Cross River">Cross River</option>
                    <option value="Ebonyi">Ebonyi</option>
                    <option value="Edo">Edo</option>
                    <option value="Ekiti">Ekiti</option>
                    <option value="Enugu">Enugu</option>
                    <option value="Gombe">Gombe</option>
                    <option value="Imo">Imo</option>
                    <option value="Jigawa">Jigawa</option>
                    <option value="Kaduna">Kaduna</option>
                    <option value="Kano">Kano</option>
                    <option value="Katsina">Katsina</option>
                    <option value="Kebbi">Kebbi</option>
                    <option value="Kogi">Kogi</option>
                    <option value="Kwara">Kwara</option>
                    <option value="Lagos">Lagos</option>
                    <option value="Nasarawa">Nasarawa</option>
                    <option value="Ogun">Ogun</option>
                    <option value="Ondo">Ondo</option>
                    <option value="Osun">Osun</option>
                    <option value="Oyo">Oyo</option>
                    <option value="Plateau">Plateau</option>
                    <option value="Rivers">Rivers</option>
                    <option value="Sokoto">Sokoto</option>
                    <option value="Taraba">Taraba</option>
                    <option value="Yobe">Yobe</option>
                    <option value="Zamfara">Zamfara</option>
                    </select>
                    <div>
                    <label className='p-4 fw-bolder'>Country</label>
                    <input 
                         type="text"
                         placeholder='Country'
                         value={country}
                         onChange={(e) => setCountry(e.target.value)}
                         />
                    </div>

                    
                    <div className='d-flex flex-column'>
                         <label className='p-4 fw-bolder'>Description</label>
                         <textarea 
                         maxLength={100}
                         placeholder= "Maximum characters 100 words"
                         value={description}
                         onChange={(e) => setDescription(e.target.value)}
                         ></textarea>
                    </div>
                    
                   
                    <div className='d-flex justify-content-center'>
                         <button className='btn m-5'>Update profile</button>
                    </div>
                    
                    </form>
               </div>
          </div>

  </>
}

export default modal
