import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { AxiosResponse } from 'axios';
import { IUser } from './IUser';

export const authContext = createContext<IUser>({});

export const getUser = () => {
    return useContext(authContext);
};
export default function AuthContext(props: any) {

    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        axios.get("http://localhost:5000/auth/getuser", { withCredentials: true }).then((res: AxiosResponse) => {
            if (res.data) {
                setUser(res.data);
            }
        })
    }, [])
    return ( <authContext.Provider value={user}>{props.children}</authContext.Provider>)
    
}