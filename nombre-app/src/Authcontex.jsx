import { createContext,useState,useContext} from "react";
const AuthContext = createContext();
export const AuthProvider = ({children}) =>{
    const[isLogin, setisLoggedIn]=useState(false);
    //funciones para facilitar el login/logout
    const login = ()=> setisLoggedIn(true);
    const logout = ()=> setisLoggedIn(false);

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