import './ProfileImage.css'
import { Link } from 'react-router-dom'
import { FaCircleUser } from 'react-icons/fa6'
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'

export default function ProfileImage() {

    const auth = useContext(AuthContext)

    return (
        <li className="nav-item mx-3">
                <Link to='/profile' className="nav-link">
                    {auth?.userDetails?.image.url &&
                    (auth?.userDetails) ?
                        <img className='image' 
                            src={(auth?.userDetails?.image.url) ? auth?.userDetails?.image.url
                                :
                                (auth?.userDetails?.isMale) ? '../../images/male.png' : '../../images/female.png'}
                            alt={(auth?.userDetails?.image.alt)? auth?.userDetails?.image.alt : 'תמונת פרופיל'} />
                        :
                        <FaCircleUser className='profile-icon' style={{filter: 'drop-shadow(2px 2px 2px rgb(0 0 0 / 0.5))'}} size={32}/>
                    }
                </Link>
            </li>
    )
}
