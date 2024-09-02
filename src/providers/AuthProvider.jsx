import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [] = useState 
    const authInfo ={}
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export default AuthProvider;
