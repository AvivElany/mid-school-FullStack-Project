import './SignUp.css'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import Title from '../../components/Title/Title';
import { useNavigate } from 'react-router-dom';

const RegisterPage: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('שמרית')
  const [middleName, setMiddleName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('הררי')
  const [phone,setPhone] = useState<string>('0545381648')
  const [email, setEmail] = useState<string>('Shimrit555@gmail.com');
  const [password, setPassword] = useState<string>('Shimrit123!');
  const [passwordVerification, setPasswordVerification] = useState<string>('Shimrit123!');
  const [country, setCountry] = useState<string>('ישראל');
  const [city, setCity] = useState<string>('בת ים');
  const [street, setStreet] = useState<string>('ההגנה');
  const [houseNumber, setHouseNumber] = useState<string>('8');
  const [isMale, setIsMale] = useState<boolean>(false);
  const [isTeacher, setIsTeacher] = useState<boolean>(true);
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();

    const userToken = localStorage.getItem('userToken');
    console.log("userToken is: ",userToken);
    
    const auth = useContext(AuthContext);

    const navigate = useNavigate();

    if (!userToken) {
      setError('Token not found in local storage');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:3000/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': userToken,
        },
        body: JSON.stringify({ username, password, email }),
      });

      if (!response.ok) {
        throw new Error('Failed to register');
      }

      const data = await response.json();
      
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
        url: 'https://cdns-images.dzcdn.net/images/artist/300b1c998b93b8a62b050a4b10b14b12/264x264.jpg',
        alt: 'You wrote that this is NOT required 😉',
      },
      address: {
        country: country,
        city: city,
        street: street,
        houseNumber: Number(houseNumber),
      },
      isMale: isMale,
      isTeacher: isTeacher,
      }
      navigate('/')
    } catch (error) {
      setSuccess(null);
      setError((error as Error).message);
    }
  };

  return (
    <div>
      
      <Title title='רישום משתמש חדש'/>
      <br></br>

      <Container>
        <Row>
          <Col></Col>
          <Col xs="auto" className='border border-1 rounded-3 border-secondary-subtle p-5 text-start'>
            <Form onSubmit={handleRegister}>

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
                  <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPasswordVerification">
                  <Form.Label>&nbsp;</Form.Label>
                  <Form.Control type="password" placeholder="Password again" value={passwordVerification} onChange={(e)=>setPasswordVerification(e.target.value)}/>
                </Form.Group>
              </Row>

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

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default RegisterPage;
