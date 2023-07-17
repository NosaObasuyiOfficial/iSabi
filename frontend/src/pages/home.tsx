import React, { useEffect, useState } from 'react'
import axios from 'axios'
import image from '../assets/images/0100b61251954951b84bceae16501384.png'
import { BiPhoneCall } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'


interface userDetails { 
     id: number,
     username: string,
     skill: string,
     state: string,
     description: string
}



const Home = () => {
     
     const [data , setData] = useState([] as userDetails[])
     

     useEffect(()=>{
          const fetchData = async ()=>{
               try {
                    const res =await axios.get("http://localhost:4000/profile/skill")
                    setData(res.data);
                  
               } catch (error) {
                  
                    console.log('err')
               }
          }
          fetchData()
     }, [])
 
     return <>
     <div className="banner w-100 p-3">
          <div className="container-xxl">
               <div className="row">
                    <div className="banner-details d-flex flex-column align-items-center justify-content-center ">
                         <div className="picture shadow-lg p-5">
                              <span><h5 className='mb-3'> 🎉 "No Skill We No Fit Find, We Sabi Everything!" 🙌 </h5>  </span>
                              <h1 className='mb-5'>Welcome to <strong>i</strong>Sabi - Where Skills Dey Meet Opportunity!</h1>
                              <h4>No Mata Your Location, We Connect You to the Best in the Biz! </h4>   
                         </div>
                         <div className=" head shadow-lg mt-5 ;">
                             
                              <span className="input-group-text" id="basic-addon1">🔍</span>
                              <input type="text" className="form-control" p-2 placeholder="Wettin you dey find" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                              <span className="input-group-text" id="basic-addon1">📍</span>
                              <input type="text" className="form-control" p-2 placeholder="For which area" aria-label="Recipient's username" aria-describedby="basic-addon2"/>   
                              <button className="input-group-text" id="basic-addon2">Search</button>
                         
                         </div>
                    </div>
               </div>
          </div>

     </div>

     <div className="content display-flex justify-content-around p-5 style = width: 90%;">
          <div className="searches">
               <div className='text'>
                    <div className="cards mb-5">
                    <h4 className="card-header mb-3">Painters</h4>
                         <div className="card-body">
                              <h5 className="card-title mb-1">Search for painters in your locality</h5>
                              <p className="card-text mb-2">We have over 3000+ painters</p>
                              <a href="#" className="btn btn-primary">Search</a>
                         </div>
                    </div>
                    <div className="cards mb-5">
                    <h4 className="card-header mb-3">Cleaners</h4>
                         <div className="card-body">
                              <h5 className="card-title mb-1">Search for cleaners in your locality</h5>
                              <p className="card-text mb-2">We have over 3000+ cleaners</p>
                              <a href="" className="btn btn-primary">Search</a>
                         </div>
                    </div>
                    <div className="cards ">
                    <h4 className="card-header mb-3">Gardeners</h4>
                         <div className="card-body">
                              <h5 className="card-title mb-1">Search for gardeners in your locality</h5>
                              <p className="card-text mb-2">We have over 3000+ gardeners</p>
                              <a href="#" className="btn btn-primary">Search</a>
                         </div>
                    </div>
               </div>
               
               <div className='content-main'>
                    {data.map(details => (
                         <div className="card style= width: 18rem;">
                              <div className="card-body d-flex">
                                   <div className='board '>
                                        <div className='d-flex flex-row fs-2'>
                                             <img src={image}/>
                                             <div>
                                                  <h4 className="card-title mb-3">{details.username}</h4>
                                                  <h6 className="card-subtitles text-start c-#00a97f">📍 {details.state}</h6>
                                                  <h4 className="card-subtitle mb-2 c-#FF6000">{details.skill}</h4>
                                             </div>
                                        </div> 
                                        <div className='desc mt-3'>
                                             <h5>Description</h5>
                                             <p className="card-text ">{details.description}</p>
                                        </div>
                                             <div className='d-flex flex-column'>
                                                  <a href="#" className="card-link"><BiPhoneCall className='fs-5 m-1'/>Contact me</a>
                                                  <a href="#" className="card-link mx-5"><AiOutlineMail className='fs-5 mx-2'/>Email me</a>
                                             </div>
                                   </div>
                              </div>
                         </div>
                    ))}

               
               </div>
     
          </div>
     </div>
   
   </>    
          
          

}


export default Home






