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
       <div className='h-screen w-screen flex justify-center items-center overflow-y-auto'>
         <ClipLoader loading color="red;" size={50} className=' scale-in-center'/>
       </div>
       :
       <StyledBg className='w-screen h-screen'>
          <Title/>
      </StyledBg>

       
     }
      
   </div>
  )
}
export default Landing

const StyledBg = Styled.div`
  background: url(${ListMovies[0].bg}) no-repeat;
  background-size: cover;
  
`