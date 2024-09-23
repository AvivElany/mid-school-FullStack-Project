import './ProfileImage.css';
import { Link } from 'react-router-dom';
import { FaCircleUser } from 'react-icons/fa6';
import { AuthContext } from '../../context/AuthContext';
import { useContext, useEffect } from 'react';

export default function ProfileImage() {
    const auth = useContext(AuthContext);

    useEffect(() => {
        
    }, []);

    const getImageSrc = () => {
        if (auth?.userDetails?.image?.url) {
            return auth.userDetails.image.url;
        } else {
            return auth?.userDetails?.isMale ? '../../images/male.png' : '../../images/female.png';
        }
    };

    return (
        <li className="nav-item mx-3">
            <Link to='/profile' className="nav-link">
                {auth?.userDetails ? (
                    <img
                        className='image'
                        src={getImageSrc()}
                        alt={auth?.userDetails?.image?.alt || 'תמונת פרופיל'}
                    />
                ) : (
                    <FaCircleUser
                        className='profile-icon'
                        style={{ filter: 'drop-shadow(2px 2px 2px rgb(0 0 0 / 0.5))' }}
                        size={32}
                    />
                )}
            </Link>
        </li>
    );
}

