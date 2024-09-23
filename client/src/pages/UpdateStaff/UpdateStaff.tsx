import './UpdateStaff.css'
import { useNavigate, useParams } from 'react-router-dom';
import Title from '../../components/Title/Title';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { ToastsContext } from '../../context/ToastsContext';
import DeleteStaff from '../../components/DeleteStaff/DeleteStaff';

/* interface IUpdateStaffProps {
    id: string
} */
export default function UpdateStaff(/* props: IUpdateStaffProps */) {

    const toasts = useContext(ToastsContext)


    const navigate = useNavigate();
    const [Id, setId] = useState<string>('')
    const [firstName, setFirstName] = useState<string>('')
    const [middleName, setMiddleName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [job, setJob] = useState<string>('');
    const [imgUrl, setImgUrl] = useState<string>('');
    const [imgAlt, setImgAlt] = useState<string>('');
    const [classroom, setClassroom] = useState<string>('');
    const [isMale, setIsMale] = useState<boolean>(false);
    const [isPrincipal, setIsPrincipal] = useState<boolean>(false);
    const [isTeacher, setIsTeacher] = useState<boolean>(false);
    const [isDeleted, setIsDeleted] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);



    const { staffId } = useParams<{ staffId: string }>();
    console.log("staff Id to change is: ", staffId);
    
    const token: string | null = localStorage.getItem('userToken');
    if (!token) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const fetchStaffData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:3000/staff/${staffId}`, {
                    method: 'GET',
                    headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch staff data');
                }
                const data = await response.json();
                const staff = data.data
                console.log("staff is: ",staff);

                setId(staff._id)
                setFirstName(staff.name.first);
                setMiddleName(staff.name.middle);
                setLastName(staff.name.last);
                setJob(staff.job);
                setImgUrl(staff.image.url);
                setImgAlt(staff.image.alt);
                setClassroom(staff.classroom);
                setIsMale(staff.isMale);
                setIsPrincipal(staff.isPrincipal);
                setIsTeacher(staff.isTeacher);
                setIsDeleted(staff.isDeleted);
            } catch (error) {
                console.error('Error fetching staff data:', error);
            }
        };

    fetchStaffData();
    }, [staffId, token]);

    const handleSubmitUpdateStaff = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const updatedStaffData = {
        name: {
        first: firstName,
        middle: (middleName.length>1)?middleName : " ",
        last: lastName,
        },
        job: job,
        classroom: classroom,
        image: {
            url: imgUrl,
            alt: job
            },
        isMale: isMale,
        isPrincipal: isPrincipal,
        isTeacher: isTeacher, 
        isDeleted: isDeleted
        };

        const updateGrades = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`http://127.0.0.1:3000/staff/${staffId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': token
            },
            body: JSON.stringify(updatedStaffData)
            });
            console.log("updatedStaffData is: ", updatedStaffData);

            if (!response.ok) {
            throw new Error('Failed to update staff');
            }

            toasts?.addToast('👍🏼',`הצלחה !`,`עדכון איש הסגל בוצע בהצלחה`)
            
            navigate('/'); // Redirect to staff page after successful update
        } catch (error) {
            toasts?.addToast('⚠️' ,'danger' ,'שגיאה במהלך עדכון איש הסגל')
            console.error('Error updating staff:', error);
        } finally {
            setIsLoading(false);
        }
        };
        updateGrades();
    }

    return (
        <div className='UpdateStaff'>
            <Title title='פרטי איש סגל'/> 
            <br></br>

            <div>
                
            </div>
            {
                (Id) ?
                    <Container>

                        <Row className="g-5" key={Id}>
                            <Col>
                                <Card className="text-center">
                                    <Card.Header style={{ fontWeight: '500' }}>{firstName} {middleName} {lastName}</Card.Header>
                                    <Card.Body>
                                        {
                                            (imgUrl) ? <Card.Img variant="top" src={imgUrl} alt={imgAlt} style={{ height: '200px', objectFit: 'cover' }} />
                                                :
                                                (isMale) ? <Card.Img variant="top" src='../../images/male.png' alt={imgAlt} style={{ height: '200px', objectFit: 'cover' }} />
                                                    :
                                                    <Card.Img variant="top" src='../../images/female.png' alt={imgAlt} style={{ height: '200px', objectFit: 'cover' }} />
                                        }
                                        <Card.Title>{firstName} {middleName} {lastName}</Card.Title>
                                        <Card.Text>
                                            { job}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="text-muted">{classroom}</Card.Footer>
                                </Card>
                            </Col>

                            {/*--------------------------------------------------------------------------------------*/}
                            {/* עמודה ימין - טופס */}
                            {/*--------------------------------------------------------------------------------------*/}
                            <Col className='border rounded'>
                                <Card className="text-center">
                                    <Card.Header style={{ fontWeight: '500' }}>עדכן איש סגל</Card.Header>
                                    <div className="updateForm">
                                        <div className="formSide">
                                            <form onSubmit={handleSubmitUpdateStaff} >
                                            <div className="formContainer">
                                            
                                                <div className="formRow" >
                                                    <div>
                                                        <input
                                                            id='firstName'
                                                            type='text'
                                                            value={firstName}
                                                            onChange={(e) => setFirstName(e.target.value)}
                                                            placeholder='שם פרטי'
                                                            required
                                                            autoComplete='on'
                                                        />
                                                    </div>
                                                </div>
                                                <div className="formRow" >
                                                    <div>
                                                        <div>
                                                            <input
                                                                id='middleName'
                                                                type='text'
                                                                value={middleName}
                                                                onChange={(e) => setMiddleName(e.target.value)}
                                                                placeholder='שם אמצעי'
                                                                autoComplete='on'
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="formRow">
                                                    <div>
                                                        <input
                                                            id='lastName'
                                                            type='text'
                                                            value={lastName}
                                                            onChange={(e) => setLastName(e.target.value)}
                                                            placeholder='שם משפחה'
                                                            required
                                                            autoComplete='on'
                                                        />
                                                    </div>
                                                </div >
                                                <div className="formRow">
                                                    <div>
                                                        <input
                                                            id='web'
                                                            type='text'
                                                            value={job}
                                                            onChange={(e) => setJob(e.target.value)}
                                                            placeholder='Web URL'
                                                            autoComplete='on'
                                                        />
                                                    </div>
                                                </div>
                                                <div className="formRow">
                                                    <div>
                                                        <input
                                                            id='imgUrl'
                                                            type='text'
                                                            value={imgUrl}
                                                            onChange={(e) => setImgUrl(e.target.value)}
                                                            placeholder='כתובת תמונה'
                                                            required
                                                            autoComplete='on'
                                                        />
                                                    </div>
                                                </div>
                                            <Button className="sumitButton" type='submit' disabled={isLoading}>עדכן איש סגל</Button>
                                            </div>
                                        </form>
                                        </div>
                                        <div className="labelSide">
                                            <div className='first'>שם פרטי</div>
                                            <div className='middle'>שם אמצעי</div>
                                            <div className='family'>שם משפחה</div>
                                            <div className='job'>תפקיד אישי</div>
                                            <div className='Image'>תמונה אישית</div>
                                        </div>
                                    </div>
                                    <Card.Footer className="text-muted"><DeleteStaff id={Id} /></Card.Footer>
                                    
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    :
                    null
            }
        </div>
    )
}
