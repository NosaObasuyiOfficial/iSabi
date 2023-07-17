import  React  from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BiPhoneCall } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { BiLogIn } from 'react-icons/bi'
import {VscAccount} from 'react-icons/vsc'
import {useLocation} from 'react-router-dom'


const header = () => {

     const location = useLocation();

     return <> 

     <header className='header-top-strip p-1 px-4 shadow-sm'>
          <div className="container-xxl">
               <div className="row align-items-center">
                    <div className="col-6">
                         <p> Find skilled workers with no haze</p> 
                    </div>
                    <div className="col-6 d-flex justify-content-between">
                         <div>
                              <a href='https://mail.google.com/mail/u/0/#inbox' target="_blank"> E-mail Us:  recruiter@isabiwork.ng</a>
                         </div>
                         <div>
                              <Link to='#'><AiOutlineMail className='fs-4 mx-4'/></Link>
                              <Link to='#'><BiPhoneCall className='fs-4 mx-4'/></Link>
                         </div>
                    </div>
               </div>
          </div>
     </header>
     <header className='header-upper px-  3 '>
          <div className="container-xxl">
               <div className="row">
                    <div className="col-2 text-center m-auto ">
                         <Link to={'/'}><p className='img-fluid logo rounded-circle fs-3' ><strong>i</strong>Sabi</p></Link>
                    </div>
                    
                    <div className="navs-links col-4 d-flex align-items-center justify-content-between text-center m-auto">
                         <Link to={'/'} className={location.pathname === '/' ? 'active' : 'inactive'}>Home</Link>
                         <Link to={'profile'} className={location.pathname === '/profile' ? 'active' : 'inactive'}>Profile</Link>
                         <Link to={'about-us'} className={location.pathname === '/about-us' ? 'active' : 'inactive'}>About Us</Link>
                         <Link to={'contact'} className={location.pathname === '/contact' ? 'active' : 'inactive'}>Contact</Link>
                         
                    </div>
                    <div className=" nav-links-nav col-2 d-flex align-items-center justify-content-between">
                         <Link to={'login'} className={location.pathname === '/login'? 'inactive': 'active'}> 
                         <div className="d-flex"><span><BiLogIn className='fs-3 mx-2 m b-0'/></span>
                         <p>Login</p> </div>
                         </Link>
                         <Link to={'signup'} className={location.pathname === '/signup'? 'inactive': 'active'} >
                         <div className="d-flex"><span><VscAccount className='fs-3 mx-2 m b-0'/></span>
                         <p>SignUp</p>
                         </div>
                         </Link>
                    </div>
               </div>
          </div>

     </header>
  </>

}

export default header
