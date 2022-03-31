import React from 'react'
import { useContext,useState } from 'react';
import {Link} from 'react-router-dom'
import { AppSearch } from '../context';
import img1 from '../img/icon-user.jpg'
import logo from '../img/logo.png'
const Nav = () => {
    const searchBar = ({background:"#c3c2c22e", border:"1px black", padding:"0.5rem", color:"white", paddingLeft:"35px"})
    let Links =[
        {name: 'Home',link:'/home'},
        {name: 'TV Shows',link:'/shows'},
        {name: 'Movies',link:'/movie'},
        {name: 'Latest',link:'/latest'},
        {name: 'My List',link:'/list'},
    ];
    const context = useContext(AppSearch)
    const { searchValue } = context.states;
    const rejects = /[^\w\s]/gi;
    const changeHandler = (e) => {
        context.setStates({...context.states, searchValue: e.target.value.replace(rejects,"")})
        console.log(searchValue)
    }
    const [active, setActive] = useState(false);
    const ToggleClass = () => {
        !active?
            setActive(true)
        :
            setActive(false);
    }
    return (
    <div className='shadow-xl w-full top-0 left-0 z-20 fixed'>
        <div className='xl:flex items-center justify-between flex py-4 sticky bg-black opacity-90 px-7 xl:px-14'>
            <div className='font-bold text-2xl cursor-pointer flex xl:items-center font-[arial] text-white mx-auto xl:mx-0'>
                {/* <span className='text-3xl mr-1 pt-2 icon-ionic'>
                <ion-icon name="logo-ionic"></ion-icon>
                </span> */}
                <a href={Links[0].link}>
                    <h1 className='text-black'>
                        <img
                            src={logo}
                            alt=''
                            className='w-1/2 mx-auto xl:w-full '
                        />
                    </h1>
                </a>
            
            <ul className={active
                ?'z-20 w-full my-auto xl:flex xl:items-center xl:pb-0 pb-12 absolute top-14 xl:static xl:z-auto left-0 w-fullxl:w-auto xl:pl-20 transition-all duration-500 ease-in'
                :'z-20 w-full my-auto xl:flex xl:items-center xl:pb-0 pb-12 absolute top-14 xl:static xl:z-auto left-0 w-fullxl:w-auto xl:pl-20 transition-all duration-500 ease-in hidden'}>
                {
                    Links.map((link)=>(
                        <li key={link.name} className='xl:ml-8 text-xl xl:my-0 xl:text-white hover:text-red-700 xl:bg-transparent bg-black py-5 opacity-90'>
                            <Link to={link.link} className='  duration-500 pl-10 w-full'>{link.name}
                            
                            </Link>
                        </li>
                    ))
                }
            </ul>
            </div>
            <div className='search-bar xl:flex'>
            <div className='hidden md:block'>
            <input
                style={searchBar}
                key="random1"
                value={searchValue}
                placeholder={"| Search Movie"}
                onChange={(e)=> changeHandler(e)}
                className="rounded-lg pl-11 w-0 xl:w-80 hidden md:block"
            />
                <ion-icon name="search-outline">

                </ion-icon>
            </div>

            </div>  
            <div className={ active? `hamburger-container block xl:hidden change absolute`: `hamburger-container block xl:hidden absolute`}  onClick={ToggleClass}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <i data-feather="circle"></i>
            <img
                src={img1}
                alt=''
                className='w-10 h-10 rounded-xl absolute right-7 xl:right-14'
            />
        </div>

    </div>
  )
}

export default Nav