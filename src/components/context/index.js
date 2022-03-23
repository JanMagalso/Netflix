import React, { useEffect, useState} from "react";

export const AppSearch = React.createContext({});
export const ContextProvider = (props) => {

    let initialValue = { 
        searchValue: '',
        isLoading: false,
        user:{
            name: 'JohnMagalso',
            password: 'admin',
            auth: false
        }
    }
    const [states, setStates] = useState(initialValue)
    useEffect(() => {
        setStates(states)
        console.log(states)
      }, [states])
    return(
        <AppSearch.Provider value={{states: states, setStates: setStates}}>
            {props.children}
        </AppSearch.Provider>
    )
}
// export const Authentication = (props) => {
//     
//     return(
//         <AppLogin.Provider value={{userLogin: userLogin, setUserLogin:setUserLogin}}>
//             {props.children}
//         </AppLogin.Provider>
//     )
// }