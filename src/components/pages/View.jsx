import React from 'react'
import Styled from 'styled-components'
import ListMovies from '../ Movies/ListMovies'
import { useParams } from 'react-router'
import play from './../img/play.png'
// import {device} from './typescripts/devices'

export const View = () => {

  const params = useParams();
  let movie = ListMovies.find(movie => movie.id === params.id);

  return (
    <StyledDiv image = {movie.bg} className='h-screen'>
      <div className='flex flex-col absolute top-1/4 left-10 xl:left-32 py-12'>
        <Styledimg>
          <h1 className='text-6xl mb-5 text-white'>{movie.title}</h1>
        </Styledimg>
          <StyleList className='text-gray-400 inline-flex list-none'>
            <li><a href='/year'>{movie.year}</a></li>
            <li className='md:bg-red-800 bg-none'><a href='/age'>{movie.audience}</a></li>
            <li><a href='./time'>{movie.duration}</a></li>
            <li><a href='/genre'>{movie.genre}</a></li>
          </StyleList>
        <div className='text-white break-before-all xl:w-1/3 pt-5 leading-6 md:pr-16 pr-10 xl:pr-0'>
          {movie.definition}
        </div>
        <div>
          <button className='py-2 px-5 mt-3 bg-red-700 text-white hover:bg-red-800 transition-all duration-100 ease-in rounded-sm'>
            <ion-icon name="play-outline" className='pt-3 m-auto w-3'></ion-icon>Play
          </button>
          <button className='text-white ml-5 py-2 px-5 bg-black opacity-80 xl:opacity-100 border-gray-100 border border-1'>
            <ion-icon name="add-outline"></ion-icon>My List
          </button>
        </div>
        <div className='my-10'>
          <a
            href={movie.link}
            alt=''
            className='flex'
            target='_blank'
            rel='noreferrer'
          >
            <img src={play} className='w-14' alt=''></img>
            <h2 className='flex  text-white my-auto ml-5 text-xl'>Watch Now</h2>
          </a>
        </div>
      </div>
    </StyledDiv>
  )
}
export default View

const StyledDiv = Styled.div`
  background: url(${(p) => p.image}) no-repeat;
  background-size: 100%;
  height: 100vh;
`

const Styledimg = Styled.div`
    top: 28%;
    position: relative;
` 
const StyleList = Styled.ul`
    position: relative;
    li{
      padding: 5px;
      margin: 0px 25px;
      font-size: 1.1em;
      cursor: pointer;
    }
    li::after{
      position: absolute;
      content: "|";
      padding-left: 30px;
      color: white;
    }
    @media (max-width: 768px) {
      li{
        margin: 0px 5px;
      }
      li::after{
        content: "";
        padding-left: 15px;
      }
    }
    li:nth-child(2){
      border-radius: 2px;
      padding: 5px 15px;
      color: white;
    }
    li:hover{
      cursor: pointer;
      color: white;
      transition: all ease-in 0.5s;

    }
    
`