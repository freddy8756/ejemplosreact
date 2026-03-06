import { createContext,useState,useContext} from "react";
const AuthContext = createContext();
export const AuthProvider = ({children}) =>{
    const[isLogin, setisLoggedIn]=useState(!!localStorage.getItem('token'));
    //funciones para facilitar el login/logout
    const login = (token)=>{
        localStorage.setItem('token',token);//guardamos el token
    setisLoggedIn(true);
    } ;
    const logout = ()=>{
        localStorage.removeItem('token');//limpiamos al salir
        setisLoggedIn(false);
    };

    return(
        <AuthContext.Provider value={{isLogin,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth debe usarse dentro de un AuthProvider");
    }
    return context;
};
