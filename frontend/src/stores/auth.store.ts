import { create } from "zustand";

type User = {
 id:number;
 name:string;
 email:string
 dataNascimento:string
}

type AuthState = {
    user: User | null;
    token:string | null;
    isAuthenticate: boolean;
    login:(user: User,token:string)=>void;
    logout:()=> void

}

export const useAuthStore = create<AuthState>((set)=>({
    user: null,
    token:null,
    isAuthenticate:false,

    login: (user:User,token:string)=>{
        localStorage.setItem("token",token)
        set({user,token,isAuthenticate:true})
    },

    logout:()=>{
        localStorage.removeItem("token")
        set({user:null,token:null,isAuthenticate:false})
    }
}))