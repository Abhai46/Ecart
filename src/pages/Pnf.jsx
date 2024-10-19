import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'


const Pnf = () => {
  return (
    <>
     <Header/>
     <div style={{padding:'100px', height:'80vh'}} className="flex justify-center items-center flex-col ">
      <img className='mt-10' src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg" alt="" />
      <h1 className="font-bold text-4xl">Page Not Found</h1>
      <p>You have Lost Click Home to redirect to home page</p>
      <Link className='bg-green-500 text-white p-2 rounded' to={'/'}>Home</Link>
      </div> 
     <Footer/> 
    </>
  )
}

export default Pnf