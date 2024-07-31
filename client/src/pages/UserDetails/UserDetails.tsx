import './UserDetails.css'
import { apiBase } from '../../config'
import { CiEdit } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Title from '../../components/Title/Title'
import { LuClipboardEdit } from 'react-icons/lu'
import { IUserDetails } from '../../interfaces/UserInterfaces'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import DeleteUserButton from '../../components/DeleteUser/DeleteUser';


export default function UserDetails() {

    const { userId } = useParams()

    const [user, setUser] = useState<IUserDetails | null>(null)
    const [error, setError] = useState<string | null>(null)

    const token: null | string = localStorage.getItem('userToken')
    if (!token) return null

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`${apiBase}/users/${userId}`, {
                    method: 'GET',
                    headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token
                    }
                });
                const data = await response.json()
                console.log("user data is: ", data);
                
                if (!response.ok) throw new Error(data)
                setUser(data.data)
            } catch (err) {
                const errMessage = (err as Error).message
                setError(errMessage)
            }
        };
        fetchUser();
    }, [token, userId])
    return (
        <div className='UserDetails Page'>
            <Title title='פרטי משתמש'/> 
            <br></br>

            <div>
                {
                    (error) &&
                    <>
                        <h5>מצטערים, המשתמש לא קיים במערכת</h5>
                        <p style={{ color: 'red' }}>{error}</p>
                    </>
                }
            </div>
            {
                (user) ?
                    <Container>

                        <Row className="g-5" key={user._id}>
                            <Col>
                                <Card className="text-center">
                                    <Card.Header style={{ fontWeight: '500' }}>{user.name.first} {user.name.middle} {user.name.last} </Card.Header>
                                    <Card.Body>
                                        {
                                            (user.image.url) ? <Card.Img variant="top" src={user.image.url} alt={user.image.alt} style={{ height: '200px', objectFit: 'cover' }} />
                                                :
                                                (user.isMale) ? <Card.Img variant="top" src='../../images/male.png' alt={user.image.alt} style={{ height: '200px', objectFit: 'cover' }} />
                                                    :
                                                    <Card.Img variant="top" src='../../images/female.png' alt={user.image.alt} style={{ height: '200px', objectFit: 'cover' }} />
                                        }
                                        <Card.Title>{user.name.first} {user.name.middle} {user.name.last}</Card.Title>
                                        <Card.Text>
                                            {user.classroom}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="text-muted">
                                        <Button variant="primary" size='sm' className='mx-3'><Link to={`/UpdateUser/${user._id}`} className="navbar-brand"><CiEdit className='me-1' size={22} style={{ marginTop: '-5px' }} /> ערוך את הפרטים של {user.name.first}</Link></Button>
                                        
                                        <Button variant="danger" size='sm' className='mx-3'><DeleteUserButton id={ user._id } /></Button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col className='border rounded'>
                                <div className='py-5'>
                                    <div className="userContact">
                                        <div className="contactDetails">
                                            <div className="contactDetail">{user.phone }</div>
                                            <div className="contactDetail">{ user.email}</div>
                                            <div className="contactDetail">{user.address.street} {user.address.houseNumber}, {user.address.city}</div>
                                        </div>
                                        <div className="contactTitles">
                                            <div className="contactTitle">טלפון</div>
                                            <div className="contactTitle">אימייל</div>
                                            <div className="contactTitle">כתובת</div>
                                        </div>
                                    </div>
                                    {
                                        (user.grades.art) ?
                                            <>
                                                <h3 className='gradeChartTitle'>גיליון ציוני התלמיד</h3>
                                                <div className="gradeChartdiploma">
                                                    <div className="gradeChartGrades">
                                                        <div className="gradeChartGrade">{user.grades.math? user.grades.math:'אין מידע' }</div>
                                                        <div className="gradeChartGrade">{user.grades.english ? user.grades.english : 'אין מידע' }</div>
                                                        <div className="gradeChartGrade">{user.grades.sciences ? user.grades.sciences : 'אין מידע'}</div>
                                                        <div className="gradeChartGrade">{user.grades.history ? user.grades.history : 'אין מידע'}</div>
                                                        <div className="gradeChartGrade">{user.grades.literature ? user.grades.literature : 'אין מידע'}</div>
                                                        <div className="gradeChartGrade">{user.grades.programming ? user.grades.programming : 'אין מידע' }</div>
                                                        <div className="gradeChartGrade">{user.grades.art ? user.grades.art : 'אין מידע' }</div>
                                                        
                                                    </div>
                                                    <div className="gradeChartsubjects">
                                                        <div className="gradeChartSubject"><b>מתמטיקה</b></div>
                                                        <div className="gradeChartSubject"><b>אנגלית</b></div>
                                                        <div className="gradeChartSubject"><b>מדעים</b></div>
                                                        <div className="gradeChartSubject"><b>היסטוריה</b></div>
                                                        <div className="gradeChartSubject"><b>ספרות</b></div>
                                                        <div className="gradeChartSubject"><b>תכנות</b></div>
                                                        <div className="gradeChartSubject"><b>אומנות</b></div>
                                                    </div>
                                                </div>
                                                <Button variant="success" size='sm' className='mx-3'>
                                                    <Link to={`/UpdateGrades/${user._id}`} className="navbar-brand"><LuClipboardEdit />ערוך גליון ציונים של {user.name.first}</Link>
                                                </Button>
                                                </>
                                    :
                                    ''}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    :
                    null
            }
        </div>
    )
}
