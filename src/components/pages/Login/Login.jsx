import React, { useContext, useState } from 'react'
import { AppSearch } from '../../context'
// import auth from './../../../auth'


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const rejects = /[^\w\s]/gi;
    const context = useContext(AppSearch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const usernameHandler = (e) => {
        setUsername(e.target.value)
       if(username === (context.states.user.name)){
           console.log("same")
       }else{
        console.log("no")
       }
        
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
       if(username === (context.states.user.name)){
           console.log("same")
       }else{
        console.log("no")
       }
        
    }
    
    const isAuth = () => {
        if((username === (context.states.user.name))&&(password === (context.states.user.password))){
            console.log("sakto jud")
            context.setStates({...context.states.user, auth: true})
        }else{
         console.log("no")
        }
        
    }
    return (
    <>
        <div className='flex items-center login-page py-20 my-auto h-screen pb-92'>
            <div className='w-[460px] py-20 px-20 bg-black/70 rounded-2xl items-center mx-auto my-auto'>
                {/* <img
                    src='./../../img/logo.png'
                    className='mx-auto mb-10'
                    alt=''
                ></img> */}
                <h1 className='text-white mb-10 bold text-3xl font-extrabold'>Sign In</h1>
                <input 
                    className='bg-gray-700/60 h-10 rounded text-white px-5 py-5 w-[300px]'
                    placeholder='Username or Email'
                    value={username.replace(rejects,"")}
                    onChange={(e) => {
                        usernameHandler(e);
                    }}
                    // value={loginCredentials}
                />
                <input 
                    className='bg-gray-700/50 h-10 rounded mt-5 text-white px-5 py-5 w-[300px]'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => {
                        passwordHandler(e);
                    }}
                />
                <div className='flex mt-5 items-center justify-between'>
                    <div>
                        <input type='checkbox' name='Remember' id='Remember' className=''/>
                        <label htmlFor="Remember"  className='text-gray-400 pl-1'>Remember me</label>
                    </div>
                    <a className='text-gray-400 ' href='/'>Need Help?</a>
                </div>
                <div className='flex mt-5 items-center'>
                   
                </div>
               
                <button 
                    className='mt-5 px-10 w-full py-2.5 rounded-sm text-white bg-red-600'
                    onClick={isAuth}
                >
                    Sign In
                </button>
                <h1 className='text-white text-xl'>{}</h1>
            </div>
        </div>
    </>
  )
}

export default Login