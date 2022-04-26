import React, { useContext, useState ,useEffect } from 'react'
import { useNavigate } from 'react-router';
import { AppSearch } from '../../context'
// import auth from './../../../auth'


const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [auth,setAuth] = useState(false);
    const navigate = useNavigate();

    const rejects = /[^\w\s]/gi;
    const context = useContext(AppSearch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onChangePass = (e) => {
        setPassword(e.target.value)
      }
      const onChangeUser = (e) => {
        setUserName(e.target.value)
      }
      const isAuth = () => {
        if((userName === (context.states.user.name))&&(password === (context.states.user.password))){
          console.log("sakto jud")
          // context.setStates({...context.states.user, isAuth: true})
          setAuth(true);
        }else{
          // if(!auth){
            console.log("sayup jud")
            alert("Please enter valid username and password");
          // }
        }
      }
      useEffect(() => {
        if (auth) {
          navigate('/home');
        }
      });
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
                    value={userName.replace(rejects,"")}
                    onChange={onChangeUser}
                    // value={loginCredentials}
                />
                <input 
                    className='bg-gray-700/50 h-10 rounded mt-5 text-white px-5 py-5 w-[300px]'
                    placeholder='Password'
                    value={password}
                    onChange={onChangePass}
                    type="password"
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
                
            </div>
        </div>
    </>
  )
}

export default Login