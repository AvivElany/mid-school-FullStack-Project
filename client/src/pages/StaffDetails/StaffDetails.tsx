import './StaffDetails.css'
import { apiBase } from '../../config'
import { CiEdit } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import Title from '../../components/Title/Title'
import { AuthContext } from '../../context/AuthContext'
import { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastsContext } from '../../context/ToastsContext'
import { IUserDetails } from '../../interfaces/UserInterfaces'
import DeleteStaff from '../../components/DeleteStaff/DeleteStaff'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

interface IStaffDetailsProps {
    id: string
}
export default function StaffDetails(props: IStaffDetailsProps) {

    
    const { staffId } = useParams()
    
    const auth = useContext(AuthContext)
    const toasts = useContext(ToastsContext)


    const navigate = useNavigate();

    const [firstName, setFirstName] = useState<string>("");
    const [middleName, setMiddleName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [classroom, setClassroom] = useState<string>("");
    const [job, setJob] = useState<string>("");
    const [imgUrl, setImgUrl] = useState<string>("");
    const [imgAlt, setImgAlt] = useState<string>("");
    const [isBusy, setIsBusy] = useState<boolean>(false);


    const [staff, setStaff] = useState<IUserDetails | null>(null)
    const [error, setError] = useState<string | null>(null)

    const token: null | string = localStorage.getItem('userToken')
    if (!token) return null

    const handleSubmitUpdateStaff = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsBusy(true);
    if (!auth) { setIsBusy(false); return }

    const newCardData = {
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        classroom: classroom,
        job: job,
        image: {
            url: imgUrl,
            alt: imgAlt
        },
        isDeleted: false
    };
        
        

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const fetchStaff = async () => {
            try {
                const response = await fetch(`${apiBase}/staff/${staffId}`, {
                    method: 'GET',
                    headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token
                    }
                });
                const data = await response.json()
                const staff = data.data
                console.log("staff data is: ", data);
                
                if (!response.ok) throw new Error(data)
                setStaff(data.data)
                
                setFirstName(staff?.name.first)
                setMiddleName(staff?.name.middle)
                setLastName(staff?.name.last)
                setClassroom(staff?.classroom)
                setJob(staff?.job)
                setImgUrl(staff?.image.url)
                setImgAlt(staff?.image.alt)

            } catch (err) {
                const errMessage = (err as Error).message
                setError(errMessage)
            }
        };
        fetchStaff();
    }, [token, staffId])

    return (
        <div className='StaffDetails'>
            
            
            <Title title='פרטי סגל'/> 
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
                (staff) ?
                    <Container>

                        <Row className="g-5" key={staff._id}>
                            <Col>
                                <Card className="text-center">
                                    <Card.Header style={{ fontWeight: '500' }}>{staff.name.first} {staff.name.middle} {staff.name.last} </Card.Header>
                                    <Card.Body>
                                        {
                                            (staff.image.url) ? <Card.Img variant="top" src={staff.image.url} alt={staff.image.alt} style={{ height: '200px', objectFit: 'cover' }} />
                                                :
                                                (staff.isMale) ? <Card.Img variant="top" src='../../images/male.png' alt={staff.image.alt} style={{ height: '200px', objectFit: 'cover' }} />
                                                    :
                                                    <Card.Img variant="top" src='../../images/female.png' alt={staff.image.alt} style={{ height: '200px', objectFit: 'cover' }} />
                                        }
                                        <Card.Title>{staff.name.first} {staff.name.middle} {staff.name.last}</Card.Title>
                                        <Card.Text>
                                            {staff.job}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="text-muted">
                                        <Button variant="primary" size='sm' className='mx-3'><Link to={`/UpdateStaff/${staff._id}`} className="navbar-brand"><CiEdit className='me-1' size={22} style={{ marginTop: '-5px' }} /> ערוך את הפרטים של {staff.name.first}</Link></Button>
                                        
                                        <div><DeleteStaff id={ staff._id } /></div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col className='border rounded'>
                                <div className='py-5'>
                                    <div className="staffContact">
                                        <div className="contactDetails">
                                            <div className="contactDetail">{staff.phone }</div>
                                            <div className="contactDetail">{ staff.email}</div>
                                        </div>
                                        <div className="contactTitles">
                                            {/* <form onSubmit={handleSubmitUpdateStaff} >
                                                <div className="formContainer">
                                                <p>עריכת גליון הציונים של { firstName}</p>

                                                <div className="gradeChartdiploma">
                                                    <div className="updateGradesRow" >
                                                    <div>
                                                        <input
                                                        className="updateStaffInput"
                                                        id='firstName'
                                                        type='text'
                                                        name='firstName'
                                                        value={staff.name.first}
                                                        onChange={handleChange}
                                                        placeholder='שם פרטי'
                                                        autoComplete='on'
                                                    />
                                                    </div>
                                                    <div>
                                                        <input
                                                        className="updateStaffInput"
                                                        id='middleName'
                                                        type='text'
                                                        name='middleName'
                                                        value={staff.name.middle}
                                                        onChange={handleChange}
                                                        placeholder='שם אמצעי'
                                                        autoComplete='on'
                                                    />
                                                    </div>
                                                    <div>
                                                        <input
                                                        className="updateStaffInput"
                                                        id='lastName'
                                                        type='text'
                                                        name='lastName'
                                                        value={staff.name.last}
                                                        onChange={handleChange}
                                                        placeholder='שם משפחה'
                                                        autoComplete='on'
                                                        />
                                                    </div>
                                                    <div>
                                                        <input
                                                        className="updateStaffInput"
                                                        id='classroom'
                                                        type='text'
                                                        name='classroom'
                                                        value={staff.classroom}
                                                        onChange={handleChange}
                                                        placeholder='כיתה/שכבה'
                                                        autoComplete='on'
                                                        />
                                                    </div>
                                                    <div>
                                                        <input
                                                        className="updateStaffInput"
                                                        id='literature'
                                                        type='text'
                                                        name='literature'
                                                        value={literature}
                                                        onChange={handleChange}
                                                        placeholder='ספרות'
                                                        autoComplete='on'
                                                        />
                                                    </div>
                                                    <div>
                                                        <input
                                                        className="updateStaffInput"
                                                        id='programming'
                                                        type='text'
                                                        name='programming'
                                                        value={programming}
                                                        onChange={handleChange}
                                                        placeholder='תכנות'
                                                        autoComplete='on'
                                                        />
                                                    </div>
                                                    <div>
                                                        <input
                                                        className="updateStaffInput"
                                                        id='art'
                                                        type='text'
                                                        name='art'
                                                        value={art}
                                                        onChange={handleChange}
                                                        placeholder='אומנות'
                                                        autoComplete='on'
                                                        />
                                                    </div>
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

                                                <Button className="sumitButton" type='submit' disabled={isLoading}>עדכן ציונים</Button>
                                                </div>
                                            </form> */}
                                        </div>
                                    </div>
                                    
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
}
