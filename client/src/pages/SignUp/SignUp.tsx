import './SignUp.css'
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Title from '../../components/Title/Title';
import { AuthContext } from '../../context/AuthContext';
import { ToastsContext } from '../../context/ToastsContext';
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';

export default function SignUp() {

  const [city, setCity] = useState<string>('בת ים');
  const [isMale, setIsMale] = useState<boolean>(false);
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const [street, setStreet] = useState<string>('ההגנה');
  const [country, setCountry] = useState<string>('ישראל');
  const [phone, setPhone] = useState<string>('0545381648');
  const [lastName, setLastName] = useState<string>('הררי');
  const [middleName, setMiddleName] = useState<string>(' ');
  const [classroom, setClassroom] = useState<string>('ח-2');
  const [isTeacher, setIsTeacher] = useState<boolean>(true);
  const [isDeleted, setIsdeleted] = useState<boolean>(false);
  const [houseNumber, setHouseNumber] = useState<string>('8');
  const [firstName, setFirstName] = useState<string>('שמרית');
  const [password, setPassword] = useState<string>('Shimrit123!');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('Shimrit555@gmail.com');
  const [passwordVerification, setPasswordVerification] = useState<string>('Shimrit123!');

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const toasts = useContext(ToastsContext)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsBusy(true)
    if (!auth) { setIsBusy(false); return }

    const userData = {
      name: {
        first:firstName,
        middle:middleName,
        last:lastName,
      },
      phone: phone,
      email: email,
      password: password,
      image: {
        url: 'https://cdn.geektime.co.il/wp-content/uploads/2015/04/photo.jpg',
        alt: firstName,
      },
      address: {
        country: country,
        city: city,
        street: street,
        houseNumber: Number(houseNumber),
      },
      grades: {
        math: 0,
        english: 0,
        sciences: 0,
        history: 0,
        literature: 0,
        programming: 0,
        art: 0
      },
      classroom: classroom,
      isMale: isMale,
      isTeacher: isTeacher,
      isDeleted: isDeleted,
    }

    console.log(userData)

    const { error } = await auth?.signUp(userData)

    if (error) {
      toasts?.addToast('⚠️', 'בעיה ברישום משתמש חדש', error, 'danger')
    } else {
      toasts?.addToast('👍🏼', 'הרישום בוצע בהצלחה', `בבקשה התחבר עם המשתמש החדש`, 'success')
      navigate('/signin')
    }
    setIsBusy(false)
  }

  return (
    <div className='SignUp Page'>
      <Title title='רישום משתמש חדש'/>
      <br></br>

      <Container>
        <Row>
          <Col></Col>
          <Col xs="auto" className='border border-1 rounded-3 border-secondary-subtle p-5 text-start'>
            <Form onSubmit={handleSubmit}>

              {/* Full Name -------------------------------------------------- */}

              <Row className="mb-4 fw-bold">
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="פרטי" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridMiddleName">
                  <Form.Label>&nbsp;</Form.Label>
                  <Form.Control type="text" placeholder="אמצעי" value={middleName} onChange={(e)=>setMiddleName(e.target.value)}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                  <Form.Label>&nbsp;</Form.Label>
                  <Form.Control type="text" placeholder="משפחה" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                </Form.Group>
              </Row>

              {/* Phone & Email ---------------------------------------------- */}

              <Row className="mb-4 fw-bold">
                <Form.Group as={Col} controlId="formGridPhone">
                  <Form.Label>Phone & Email</Form.Label>
                  <Form.Control type="phone" placeholder="Phone number" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>&nbsp;</Form.Label>
                  <Form.Control type="email" placeholder="Email address" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </Form.Group>
              </Row>

              {/* Password -------------------------------------------------- */}

              <Row className="mb-4 fw-bold">
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPasswordVerification">
                  <Form.Label>&nbsp;</Form.Label>
                  <Form.Control
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password again" value={passwordVerification} onChange={(e) => setPasswordVerification(e.target.value)} />
                </Form.Group>
              </Row>
                  <button className='showPasswordButton' type="button" onClick={toggleShowPassword}>
                  {showPassword ? 'Hide Password' : 'Show Password'}
                </button>

              {/* Address ---------------------------------------------------- */}

              <Row className="fw-bold">
                <Form.Group as={Col} controlId="formGridCountry">
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="Country" value={country} onChange={(e)=>setCountry(e.target.value)}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>&nbsp;</Form.Label>
                  <Form.Control placeholder="City" value={city} onChange={(e)=>setCity(e.target.value)}/>
                </Form.Group>
              </Row>

              <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridStreet">
                  <Form.Label>&nbsp;</Form.Label>
                  <Form.Control placeholder="Street" value={street} onChange={(e)=>setStreet(e.target.value)}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridHouseNumber">
                  <Form.Label>&nbsp;</Form.Label>
                  <Form.Control placeholder="House number" value={houseNumber} onChange={(e)=>setHouseNumber(e.target.value)}/>
                </Form.Group>
              </Row>

              {/* classroom --------------------------------------------------- */}

              <Row className="mt-4 fw-bold">
                <Form.Label>כיתה ?</Form.Label>
              </Row>

              <Row className="mt-1">
                <Form.Group className="mb-5" id="formClassroom">
                  <Form.Control placeholder="House number" value={classroom} onChange={(e)=>setClassroom(e.target.value)}/>
                </Form.Group>
              </Row>

              {/* Teacher --------------------------------------------------- */}

              <Row className="mt-4 fw-bold">
                <Form.Label>SignUp as a Teacher ?</Form.Label>
              </Row>

              <Row className="mt-1">
                <Form.Group className="mb-5" id="formGridisTeacher">
                  <Form.Check type="checkbox" label="Yes" checked={isTeacher} onChange={(e)=>setIsTeacher(e.target.checked)}/>
                </Form.Group>
              </Row>

              {/* Gender --------------------------------------------------- */}

              <Row className="mt-4 fw-bold">
                <Form.Label>SignUp as a Male ?</Form.Label>
              </Row>

              <Row className="mt-1">
                <Form.Group className="mb-5" id="formGridisMale">
                  <Form.Check type="checkbox" label="Yes" checked={isMale} onChange={(e)=>setIsMale(e.target.checked)}/>
                </Form.Group>
              </Row>

              {/* Submit ---------------------------------------------------- */}

              <Row className="fw-bold border-bottom"></Row>

              <Row>
                <Col></Col>
                <Col>
                  <div className="text-center mt-5 d-grid">
                    <Button type='submit' variant='primary' size='sm' disabled={isBusy}>
                      {
                        (isBusy) &&
                        <Spinner
                          className='me-3'
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                      }
                      Sign Up
                    </Button>
                  </div>
                </Col>
                <Col></Col>
              </Row>

              {/* ----------------------------------------------------------- */}

            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>

      <div className="haveAcount">
        <hr></hr>
        Alreddy Have an acount??<br></br><br></br> <Link to={'/signin'} className='nav-link'>Sigh in Here</Link>
      </div>

    </div>
  )
}
