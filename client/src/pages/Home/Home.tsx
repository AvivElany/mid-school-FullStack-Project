import Hero from '../../components/Hero/Hero'
import './Home.css'
import Staff from '../../components/Staff/Staff'
import NewsComponent from '../../components/NewsComponent/NewsComponent'
import ContactComponent from '../../components/ContactComponent/ContactComponent'
import { useContext } from 'react'
import { ToastsContext } from '../../context/ToastsContext'

export default function Home() {

  const toasts = useContext(ToastsContext)

  return (
    <div className='Home Page'>
      <Hero />
      <NewsComponent />
      <Staff />
      <ContactComponent />
    </div>
  )
}
