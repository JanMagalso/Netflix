import React, { useContext, useEffect, useState } from "react";
import {Latest, Disney} from './../../Movies'
import Styled from 'styled-components'
import { AppSearch } from './../../context';
import { useNavigate } from "react-router";
import Slider from 'react-slick'


export default function Movies(){
    const context = useContext(AppSearch)
    const {searchValue} = context.states;
    const [movies, setMovies] = useState(Latest);
    const [disney, setDisney] = useState(Disney);
    // const [list, setList] = useState(false);
    // const [listCheck, setListCheck] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        const newList = [...Latest].filter(data => data.title.toLowerCase().match(searchValue.toLowerCase())!== null)
        const disneyList = [...Disney].filter(data => data.title.toLowerCase().match(searchValue.toLowerCase())!== null)
        

        setMovies(newList);
        setDisney(disneyList);
    },[searchValue])
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        cssEase: "linear"
      };
    return(
        <div className='py-20 px-14 bg-black h-screen mt-14'>
          {
                movies.length === 0 ? <h2>No Result</h2> :
                <div className="relative">
                <h2 className='mb-5 text-white text-2xl mr-14'>Favorite Movies<br/>
                    </h2>
                    <div className=''>
                        <Slider {...settings}>
                        {
                            movies.map((dataList,i) => {
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
                                    <a href={() => {
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
               </div>
            } 
            {
                    disney.length === 0 ?  <h2>{}</h2> :
                    <div className="relative">
                    <h2 className='mt-14 mb-5 text-white text-2xl mr-14'>Disney<br/>
                    </h2>
                    <div className='mx-auto h-52'>
                    <Slider {...settings}>
                    {
                        disney.map((dataList,i) => {
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
                                <a href={() => {
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
                </div>
            }
            
        </div>
    )
}
const StyledImg = Styled.img `
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

