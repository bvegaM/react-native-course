import { createContext, useContext, useEffect, useState, type PropsWithChildren } from "react";


enum AuthStatus {
    'checking' = 'checking',
    'authenticated' = 'authenticated',
    'unauthenticated' = 'unauthenticated',
}

interface AuthState {
    status: AuthStatus;
    token?: string
    user?: User
    isChecking: boolean
}

interface User{
    name: string,
    email: string
}

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {

    const [status, setstatus] = useState(AuthStatus.checking);


    useEffect(() => {
        setTimeout(() => {
            setstatus(AuthStatus.unauthenticated);
        }, 1500);
    }, [])
    

    return (
        <AuthContext.Provider value={{
            status: status,
            isChecking: status === AuthStatus.checking
        }}>
            {children}
        </AuthContext.Provider>
    )

}