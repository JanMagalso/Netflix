import React, { useEffect, useState } from 'react'
import Styled from 'styled-components'
import ListMovies from '../../ Movies/ListMovies'
import Title from './Title'
import ClipLoader from "react-spinners/ClipLoader";

const Landing = () => {
  // let movies = ListMovies[0];
  const [isLoading, setIsloading] = useState(false);
  
  useEffect(() => {
    setIsloading(true)
      setTimeout(()=>{
        setIsloading(false);
      },1000)
      
  },[])
  
  return (

   <div className='bg-netflix '>
     {    
       isLoading 
       ?
       <div className='h-[100vh] w-[95vw] flex justify-center items-center overflow-y-auto'>
         <ClipLoader loading color="red;" size={50} className=' scale-in-center'/>
       </div>
       :
       <section>
       <StyledBg className='w-full h-screen absolute'></StyledBg>
        <Title/></section>

       
     }
      
   </div>
  )
}
export default Landing

const StyledBg = Styled.div`
  background: url(${ListMovies[0].bg}) no-repeat;
  background-size: cover;
  @media (max-width: 768px) {
    background-position-x: -500px;
  }
`