import axios from "axios";
import { useState , useContext , useEffect , createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [auth , setauth] = useState({
        user: null,
        token: '',
    })

    axios.defaults.headers.common["Authorization"] = auth?.token;

    useEffect(()=>{
        const data = localStorage.getItem('auth')
        if(data){
            const parsedData = JSON.parse(data)
            setauth({
                ...auth,
                user : parsedData.user,
                token : parsedData.token,
            })
        }
    } , [])
    return(
        <AuthContext.Provider value={[auth , setauth]}>
            {children}
        </AuthContext.Provider>
    );
};

const  useAuth = () => useContext(AuthContext);

export {useAuth , AuthProvider};