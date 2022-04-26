import React, { useContext, useEffect, useState } from 'react'
import name from './../../img/name.png'
import Styled from 'styled-components'
import ListMovies from '../../ Movies/ListMovies'
import Slider from 'react-slick'
import { useNavigate } from 'react-router'
import { AppSearch } from './../../context';
import {Latest} from './../../Movies.js'
import {style} from './Style'
// import {device} from './typescripts/devices'

export const Title = () => {
  const context = useContext(AppSearch)
    const {searchValue} = context.states;
    const [movies, setMovies] = useState(Latest); 
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 1500,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    const [check, setCheck] = useState(settings);
    const navigate = useNavigate()
    
    useEffect(()=>{
        // infiniteCheck();
        searchValue==null?
            setCheck({infinite:true})
            :
            setCheck({infinite:false})
        
        const newList = [...Latest].filter(data => data.title.toLowerCase().match(searchValue.toLowerCase())!== null)
        setMovies(newList);
        console.log(searchValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[searchValue])
  let movie = ListMovies[0];
  return (
    <>
      <div>
      <Gradient></Gradient>
      <div className='flex flex-col relative top-20 ml-10 xl:ml-32 py-12 h-screen'>
        <Styledimg>
          <img 
            src={name}
            alt=''
            className={style.imgClass}
          />
          {/* <h1 className='text-6xl mb-5 text-white'>{movie.title}</h1> */}
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
            href='https://drive.google.com/file/d/1IFnCeygVgaYZ7Q1wPcoy16k4sT57dB4_/view?usp=sharing'
            alt=''
            className='flex'
            target='_blank'
            rel='noreferrer'
          >
            <img src='./img/play.png' className='w-14' alt=''/>
            <h2 className='flex  text-white my-auto ml-5 text-xl'>Watch Now</h2>
          </a>
        </div>
      </div>
      
    </div>
    <StyleDiv className='py-20 px-14 bg-black h-screen overflow-x-auto'>
            <h2 className='mb-5 text-white text-2xl z-50'>Continue Watching for John
            </h2>
             <div className=''>
                <Slider {...settings}>
                {
                    movies.map((dataList,i) => {
                    console.log(movies);
                    return(
                        <div onClick={() => {
                            navigate(`/view/${dataList.id}`);
                        }} 
                        className='py-16' key={i}>
                            <Image
                                    src={dataList.img}
                                    className='w-full h-full'
                                    alt=''
                                />
                            <a href="/" onClick={() => {
                                navigate(`/view/${dataList.id}`);
                            }}
                                className='' >
                                    {/* <img src='./../img/play.png' alt=''/> */}
                            </a>
                                <h2 className='text-white z-50 relative top-0 mt-5 hidden'>{dataList.title}</h2>
                        </div>
                    )
                })
                }
                </Slider>
            </div>
        </StyleDiv>
    </>
  )
}
export default Title
const Gradient = Styled.div`
  background: linear-gradient(to right,black 0%,transparent 50%);
  background-size: cover;
  position: absolute;
  height: 100vh;
  width: 95vw;
  @media (max-width: 768px) {
    background: linear-gradient(to right,black 0%,transparent 100%);
  }
`
const Styledimg = Styled.div`
    top: 0%;
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
const Image = Styled.img `
    margin-top: 20px;
    max-width: unset;
    width: 350px;
    height: 180px;
    :hover{
        transition: 0.5s;
        transform: scale(1.5);
        object-fit: contain;

    }
    @media (max-width: 768px){
        :hover{
            // transform: none;
            transition: 0.5s;
            overflow: scroll;
            object-fit: contain;
            transform: scale(1.2)
        }
    }
`

const StyleDiv = Styled.div`
    .thumbnail .play:hover{
        transition: 0.5s;
        transform: scale(1.5);
        object-fit: contain;
    }
    @media (max-width: 768px){
        .thumbnail .play:hover{
            // transform: none;
            transition: 0.5s;
            transform: scale(1.2)
        }
    }
`