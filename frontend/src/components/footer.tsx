import React from 'react'
import {AiFillTwitterCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import {BsFacebook, BsInstagram, BsLinkedin} from 'react-icons/bs'

const footer = () => {
  return <>
     <footer className='footer px-5 py-3'>
          <div className='container-xxl'>
               <div className="row">
                    <div className="col-4 d-flex flex-column ">
                         <h3 className='mb-4'>Contact Us</h3>
                         <div className="footer-details">
                              <p className='mb-3'><b>Address:</b> 141 Rd 14, Adebayo Doherty, Lekki, Lagos, Nigeria</p>
                              <p className='mb-3'><b>Phone:</b> <a href='tel:+2348033254376'> Call Us +2348033254376</a></p>
                              <p className='mb-5'><b>Hours Open:</b> From 8am to 4pm</p>
                              <p className='mb-3 '><b>Follow Us</b></p>
                              <div className="col-5 social-icons mb-3 d-flex justify-content-around">
                                   <Link to='#'><AiFillTwitterCircle className='fs-4'/></Link>
                                   <Link to='#'><BsFacebook className='fs-4'/></Link>
                                   <Link to='#'><BsInstagram className='fs-4'/></Link>
                                   <Link to='#'><BsLinkedin className='fs-4'/></Link>
                                  
                              </div>
                         </div>
                    </div>
                    <div className="col-2">
                         <h3 className='mb-4'>About</h3>
                         <div className="footer-details d-flex flex-column ">
                              <Link to=''className="mb-3 m-0">About Us</Link>
                              <Link to=''className="mb-3 m-0">Delivery</Link>
                              <Link to=''className="mb-3 m-0">Privacy Policy</Link>
                              <Link to=''className="mb-3 m-0">Tax Policy</Link>
                              <Link to=''className="mb-3 m-0">Terms & Conditions</Link>
                         </div>
                    </div>
                    <div className="col-2">
                         <h3 className='mb-4'>Account</h3>
                         <div className="footer-details d-flex flex-column ">
                              <Link to=''className="mb-4 m-0 ">Profile</Link>
                              <Link to=''className="mb-4 m-0">Help</Link>
                              <Link to=''className="mb-3 m-0">Coupons</Link>
                         </div>
                    </div>
                    <div className="col-4">
                         <h3 className="mb-3">Install App</h3>
                         <div className="footer-details">
                              <p>Available on Google Play Service & App Store</p>
                         </div>
                    </div>   
               </div>
               <hr />
               <div className="row d-flex justify-content-between">
                    <div className="col-3">
                         <p>&copy; Developed by Group 2 Decagon 2023</p>
                    </div>
                    <div className="col-3 d-flex justify-content-around">
                         <Link to='#' className='text-black'> Privacy Policy</Link>
                         <Link to='#' className='text-black'> Terms of Use</Link>
                         <Link to='#' className='text-black'> Contact Us</Link>
                    </div>
               </div>
          </div>
     </footer>
  </>
}

export default footer