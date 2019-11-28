import { createContext, useContext } from 'react';

export const AuthContext = createContext({
    token: '',
    setToken: (token) => { this.token = token },

});

export function useAuth() {
    //AuthContext.token = input;
    return useContext(AuthContext);
}