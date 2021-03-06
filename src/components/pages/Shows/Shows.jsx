import React, { useContext, useEffect, useState } from "react";
import {Latest} from './../../Movies'
import Styled from 'styled-components'
import { AppSearch } from './../../context';
import Slider from 'react-slick'
import { useNavigate } from "react-router";

export default function Movies(){
    const context = useContext(AppSearch)
    const {searchValue} = context.states;
    const [movies, setMovies] = useState(Latest); 
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 5,
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

       
    return(
        <StyleDiv className='py-20 px-14 bg-black h-screen overflow-x-auto mt-14'>
            <h2 className='mb-5 text-white text-2xl'>TV SHOWS<br/>
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
                            <StyledImg
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
    )
}

const StyledImg = Styled.img `
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
