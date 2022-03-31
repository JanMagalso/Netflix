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
    const navigate = useNavigate();
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear",
    };
    useEffect(()=>{
        const newList = [...Latest].filter(data => data.genre.toLowerCase().match('series')!== null)
        setMovies(newList);
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
