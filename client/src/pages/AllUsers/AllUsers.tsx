import './AllUsers.css'
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import { LuClipboardEdit } from 'react-icons/lu';
import { AuthContext } from '../../context/AuthContext';
import { useState, useEffect, useContext } from 'react';
import { IUserDetails } from '../../interfaces/UserInterfaces';
import DeleteUserButton from '../../components/DeleteUser/DeleteUser';
import NoPermission from '../../components/NoPermission/NoPermission';
import { Button } from 'react-bootstrap';
import { FcViewDetails } from 'react-icons/fc';
import { CiEdit } from 'react-icons/ci';


export default function AllUsers(/*props: IAllUsersProps*/) {

    const [users, setUsers] = useState<IUserDetails|null>(null)
  const [loading, setLoading] = useState(true);
  
  const navigate = useNavigate()
    
  const token: null | string = localStorage.getItem('userToken')
    if (!token) return null

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await fetch('http://127.0.0.1:3000/users/', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'x-auth-token': token
              }
            });
          
          const data = await response.json();
          const allUsers = await data.data
          setUsers(allUsers);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching users:', error);
          setLoading(false);
        }
      };

      fetchUsers();
    }, [token, users]);
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const auth = useContext(AuthContext)

  const goToUserDetails = (userId: string) => {
        navigate(`/user-details/${userId}`, { state: { userId: userId } })
    }

    if (loading) {
      return <div>Loading...</div>;
    }

  return (
    <div className='AllUsers'>
      {
        (users) ?
          (auth?.userDetails?.isPrincipal || auth?.userDetails?.isTeacher) ?
            <>
            <Logo />
            <table>
              <thead>
                <tr>
                  <th className='smaller'>תמונה</th>
                  <th className='widther'>שם מלא</th>
                  <th className='widther'>תפקיד</th>
                  <th>כיתה</th>
                  <th>כתובת</th>
                  <th>אימייל</th>
                  <th>טלפון</th>
                  <th className='smaller'>ערוך פרטים</th>
                  <th className='smaller'>עדכן ציונים</th>
                  <th className='smaller'>צפה במשתמש</th>
                  <th className='smaller'>מחיקה</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user._id}>
                    <td>{
                      (user.image.url) ? <img className='profilImage' src={user.image.url} alt={user.image.alt} />
                      :
                      (user.isMale==true) ?
                        <img className='profilImage' src='../../images/male.png' />
                        :
                          <img className='profilImage' src='../../images/female.png' />
                    }</td>
                    <td className='smaller'>{user.name.first} { user.name.middle} { user.name.last}</td>
                    <td>{user.job}</td>
                    <td className='smaller'>{user.classroom}</td>
                    <td>{user.address.street} {user.address.houseNumber}, { user.address.city}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td className='smaller'><Link to={`/UpdateUser/${user._id}`} className="navbar-brand"><CiEdit className='me-1' size={22} style={{ marginTop: '-5px' }} /></Link></td>
                    <td className='smaller'><Link to={`/UpdateGrades/${user._id}`} className="navbar-brand"><LuClipboardEdit /></Link></td>
                    <td className='smaller'> <Button variant="outline-light" onClick={() => goToUserDetails(user._id)}><FcViewDetails /></Button> </td>
                    <td className='smaller'> <DeleteUserButton id={ user._id } /> </td>
                  </tr>
                ))}
              </tbody>
              </table>
                <Logo />
                </>
            :
            <NoPermission />
      :
        <NoPermission />
      }
    </div>
  );
}