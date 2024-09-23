import './Default.css'
import '../../pages/Page.css'

import { Route, Routes } from 'react-router-dom'

// components
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

// pages
import Home from '../../pages/Home/Home'
import About from '../../pages/About/About'
import SignIn from '../../pages/SignIn/SignIn'
import SignUp from '../../pages/SignUp/SignUp'
import Council from '../../pages/Council/Council'
import NewsPage from '../../pages/NewsPage/NewsPage'
import AllUsers from '../../pages/AllUsers/AllUsers'
import NotFound from '../../pages/NotFound/NotFound'
import GradeChart from '../../pages/GradeChart/GradeChart'
import UpdateUser from '../../pages/UpdateUser/UpdateUser'
import CreateNews from '../../pages/CreateNews/CreateNews'
import UpdateNews from '../../pages/UpdateNews/UpdateNews'
import UserDetails from '../../pages/UserDetails/UserDetails'
import UserProfile from '../../pages/UserProfile/UserProfile'
import ContactPage from '../../pages/ContactPage/ContactPage'
import CreateStaff from '../../pages/CreateStaff/CreateStaff'
import UpdateStaff from '../../pages/UpdateStaff/UpdateStaff'
import ContactList from '../../pages/ContactList/ContactList'
import UpdateGrades from '../../pages/UpdateGrades/UpdateGrades'

export default function Default() {
  return (
    <div className='Default'>

      <Header/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        
        <Route path='/about' element={<About/>}/>  
        <Route path='/signin' element={<SignIn/>}/>  
        <Route path='/signup' element={<SignUp/>}/>  
        <Route path='/news' element={<NewsPage />}/>  
        <Route path='/council' element={<Council/>}/>  
        <Route path='/allUsers' element={<AllUsers />}/>  
        <Route path='/grades' element={<GradeChart />} />  
        <Route path='/contact' element={<ContactPage />}/>  
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/CreateNews' element={<CreateNews/>}/>
        <Route path='/ContactList' element={<ContactList/>}/>
        <Route path='/createStaff' element={<CreateStaff />}/>  
        <Route path='/UpdateGrades' element={<UpdateGrades />}/>  
        <Route path='/UpdateNews/:newsId' element={<UpdateNews />}/>   
        <Route path='/UpdateUser/:userId' element={<UpdateUser />}/>   
        <Route path='/user-details/:userId' element={<UserDetails />} />
        <Route path='/UpdateGrades/:userId' element={<UpdateGrades />} />   
        <Route path='/updateStaff/:staffId' element={<UpdateStaff id={''} />} />
        
        <Route path='*' element={<NotFound/>}/>
      </Routes>

      <Footer/>
      
    </div>
  )
}
