import './UserProfile.css'

import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Title from '../../components/Title/Title'

export default function UserProfile() {

  const auth = useContext(AuthContext)  

  return (
    <div className='UserProfile Page'>
      <Title title={'עמוד משתמש'} />

      {
        (auth?.userDetails) ?
          <>
            <div className="UserProfileCard">
              <div className='profileCard'>
                <div className="profileDetails left">
                  <div className='profileItem profileName'>{auth.userDetails.name.first} {auth.userDetails.name.middle} {auth.userDetails.name.last}</div>
                  <div className='profileItem profileEmail'><i>{auth.userDetails.email}</i></div>
                  <div className='profileItem profilePhone'> {auth.userDetails.phone}</div>
                  <div className='profileItem profileAddress'>{auth.userDetails.address.street} {auth.userDetails.address.houseNumber}, {auth.userDetails.address.city} - {auth.userDetails.address.country}</div>
                </div>
                <div className="right">
                  {(auth.userDetails.image.url) ? 
                    <img className='profileItem profilePicture' src={auth.userDetails.image.url} alt={auth.userDetails.image.alt} />
                      :
                      (auth.userDetails.isMale==true) ?
                        <img className='profilePicture' src='../../images/male.png' />
                        :
                  <img className='profilePicture' src='../../images/female.png' />}
                  <div className='profileItem profileJob'><b>{auth.userDetails.job}</b></div>
                </div>
              </div>
            </div>
            
            <p>
              <Button type='button' variant='danger' size='sm' onClick={() => auth.signOut()}>Sign Out</Button>
            </p>
          </>
          :
          <>
            <p>You have to be signed-in as a <b>Student</b> or <b>Teacher</b> or <b>Principal</b> to view this page !</p>
            <p>Please <Link to="/signin">sign-in</Link> / <Link to="/contact">או פנה להנהלה</Link></p>
          </>
      }

    </div>
  )
}
