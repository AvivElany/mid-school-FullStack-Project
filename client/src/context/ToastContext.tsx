import { ReactNode, createContext, useState } from "react"

interface ToastType {
    id: number
    Message: string
}

interface ToastContextType {
    addToast: (message:string) => void
}

export const ToastContext = createContext<ToastContextType
undefined> (undefined)

export default function ToastProvider({ children }: { children: ReactNode }) {
    
    const [toast, setToast] = useState<ToastType[]>([])
    
    const addToast = () => {
        //ToDo 
    }


    return {

    }
}