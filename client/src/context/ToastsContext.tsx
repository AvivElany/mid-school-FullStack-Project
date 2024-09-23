import { createContext, useState, ReactNode } from "react"
import { ToastContainer, Toast } from "react-bootstrap"

type BootstrapColorNamesType = ('primary'|'secondary'|'success'|'danger'|'warning'|'info')

interface ToastType {
  id: number
  headerIcon: string
  headerText: string
  message: string
  headerBackground?: BootstrapColorNamesType
}

//bg-success-subtle

interface ToastsContextType {
  addToast: (headerIcon:string,headerText:string,message:string,headerBackground?:BootstrapColorNamesType) => void
}

interface ToastsProviderProps {
  children: ReactNode;
}

export const ToastsContext = createContext<ToastsContextType|undefined>(undefined)

export default function ToastsProvider({children}:ToastsProviderProps) {

  const [toasts,setToasts] = useState<ToastType[]>([])

  const addToast = (headerIcon:string, headerText:string, message:string, headerBackground?:BootstrapColorNamesType) => {
    const newToast: ToastType = { id:Date.now(), headerIcon, headerText, message, headerBackground }
    setToasts([...toasts, newToast])
  }

  return (
    <ToastsContext.Provider value= {{ addToast }}>

      {children}

      <ToastContainer className="p-3" position="top-end">
        {
          toasts.map((toast) => (
            <Toast key={toast.id} onClose={()=> setToasts(toasts => toasts.filter(t=>t.id !== toast.id))} delay={4000} autohide>
              <Toast.Header className={toast.headerBackground && `bg-${toast.headerBackground}-subtle`}>
              <span className="me-2">{toast.headerIcon}</span>
              <strong className="me-auto">{toast.headerText}</strong>
              <small>{new Date().toLocaleTimeString('he-il',{hour12:false,hour:'numeric',minute:'2-digit',second:'2-digit'})}</small>
              </Toast.Header>
              <Toast.Body>{toast.message}</Toast.Body>
            </Toast>
          ))
        }
      </ToastContainer>

    </ToastsContext.Provider>
  )
}
