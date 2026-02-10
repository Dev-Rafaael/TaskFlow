/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand"

type ModalType =
 |'createTask'
 |'updateTask'
 |'editTask'
  |'createProject'
 |'updateProject'
 |'editProject' 
 |'createUser'
 |'updateUser'
 |'editUser'
 |'editPassword'
 |null

interface ModalStore{
    modal: ModalType
    modalData?: any
    openModal:(modal:ModalType,data?:any) => void
    closeModal:()=>void
}

export const useModalStore = create<ModalStore>((set)=>({
    modal:null,
    modalData:undefined,

    openModal:(modal, data)=>
        set({modal,modalData:data}),
    closeModal:()=>
        set({modal:null,modalData:undefined}),
}))