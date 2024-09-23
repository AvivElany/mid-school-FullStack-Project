import './Header.css'
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import Logo from '../Logo/Logo';
import ProfileImage from '../ProfileImage/ProfileImage';
import { AuthContext } from '../../context/AuthContext';
import Top from '../Top/Top';
import { NavDropdown } from 'react-bootstrap';

const elmDocument = document.querySelector('html') as HTMLHtmlElement

export default function Header() {

  const auth = useContext(AuthContext)

  const [theme, setTheme] = useState('dark')

  useEffect(()=>{
    const lsTheme = localStorage.getItem('theme')

    if (lsTheme) {
      // found theme key
      elmDocument.setAttribute('data-bs-theme',lsTheme)
      setTheme(lsTheme)
    } else {
      // theme key not found
      localStorage.setItem('theme','light')
      elmDocument.setAttribute('data-bs-theme','light')
      setTheme('light')
    }
  },[])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'; // Determine the new theme based on the current one
    setTheme(newTheme); // Update the state with the new theme
    elmDocument.setAttribute('data-bs-theme', newTheme); // Set the attribute based on the new theme
    localStorage.setItem('theme', newTheme)
  }

  return (
    <div id='Top' className='Header'>

      <div className="navbar navbar-light navbar-expand-xl px-2 border-bottom pb-4">

        {/* ---- Logo ------------------------------------------------------------------------------------------------------------------------------------------ */}
        <Logo />

        {/* ---- Hamburger ------------------------------------------------------------------------------------------------------------------------------------- */}
        <button className="navbar-toggler ms-2" data-bs-toggle="collapse" data-bs-target="#menu">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* ---- Nav Links ------------------------------------------------------------------------------------------------------------------------------------- */}
        <div className="navbar-collapse collapse" id="menu">
          <ul className="navbar-nav ms-auto" style={{ listStyle: 'none' }}>

            {/* ---- Pages ------------------------------------------------------------------------------------------------------------------------------------- */}
            {/* for all or guest */}
            <li className="nav-item mx-2"><Link to={'/'} className='nav-link'>עמוד הבית</Link></li>
            <li className="nav-item mx-2"><Link to={'/about'} className='nav-link'>אודותנו</Link></li>
            <li className="nav-item mx-2"><Link to={'/news'} className='nav-link'>חדשות ועדכונים</Link></li>
            <li className="nav-item mx-2"><Link to={'/Council'} className='nav-link'>מועצת תלמידים</Link></li>
            <li className="nav-item mx-2"><Link to={'/contact'} className='nav-link'>צור קשר</Link></li>

            {/* for students */}
            {(auth?.userDetails && !auth?.userDetails?.isPrincipal && !auth?.userDetails?.isTeacher ) ?
              <>
                <li className="nav-item mx-2"><Link to={'/grades'} className='nav-link'>גיליון ציונים</Link></li>
              </>
              :
              ''}
            
            {/*For teacher Deshboatd*/}
            {(auth?.userDetails?.isTeacher)?
              <>
                <li className="nav-item mx-2"><Link to={'/allUsers'} className='nav-link'>כל המשתמשים</Link></li>
              </>
            :
            ''}
            
            {/*For Principal Deshboatd*/}
            {(auth?.userDetails?.isPrincipal) ?
              <>
              <NavDropdown title="כלי ניהול" id="basic-nav-dropdown" className='me-3'>
                <li className="nav-item mx-2"><Link to={'/allUsers'} className='nav-link'>כל המשתמשים</Link></li>
                <li className="nav-item mx-2"><Link to={'/signup'} className='nav-link'>רישום משתמש חדש</Link></li>
                <li className="nav-item mx-2"><Link to={'/CreateNews'} className='nav-link'>פרסום עדכון</Link></li>
                <li className="nav-item mx-2"><Link to={'/ContactList'} className='nav-link'>לוח פניות</Link></li>
              </NavDropdown>
              </>
            :
              ''}
            
            {/* for sighin user */}
            <>
              {
                (auth?.userDetails) ?
                <NavDropdown title="אישי" id="basic-nav-dropdown" className='me-3'>
                  <Link to={`/updateUser/${auth.userDetails._id}`} className="nav-link me-3">ערוך פרופיל</Link>
                </NavDropdown>
                  :
                  ''
              }
            </>
            
            {/* ---- Light\Dark Mode --------------------------------------------------------------------------------------------------------------------------- */}
            <li className="nav-item mx-3 theme-icon my-auto">
              <button type="button" className='dark-light-mode-button' onClick={() => toggleTheme()}>
                
                {
                  theme === 'light' ?
                    <BsFillMoonStarsFill size={18} fill='#000070'/>
                  :
                    <BsFillSunFill size={18} fill='#FFFFB0'/>
                }
              </button>
            </li>

            {/* ---- User Profile ------------------------------------------------------------------------------------------------------------------------------ */}
            <li className="nav-item mx-3">
              <ProfileImage />
            </li>

          </ul>
        </div>

      </div>
      <Top />
    </div>
  )
}
