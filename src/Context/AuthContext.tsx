import {  createContext, useContext, useState } from "react";
import { AuthContextTypes } from "../Types/AuthContextTypes";

const AuthContext = createContext<AuthContextTypes | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) =>{
    const [user , setUser] = useState(null);

    const login = (userData:any) => {
      setUser(userData);
      localStorage.setItem("userAuthentication" , JSON.stringify(userData));
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("userAuthentication")
    }

    return(
        <AuthContext.Provider value={{user,login , logout}}>
{children}
        </AuthContext.Provider>
    )

};
export const userAuth = () =>{
    return useContext(AuthContext)
}