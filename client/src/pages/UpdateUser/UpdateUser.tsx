import "./UpdateUser.css";
import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Title from "../../components/Title/Title";
import { AuthContext } from "../../context/AuthContext";

export default function UpdateUser() {

  const auth = useContext(AuthContext)

  const navigate = useNavigate();
  const [firstName, setFirstName] = useState<string>('');
  const [middleName, setMiddleName] = useState<string>(' ');
  const [lastName, setLastName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [imgUrl, setImgUrl] = useState<string>('');
  const [imgAlt, setImgAlt] = useState<string>('');
  const [classroom, setClassroom] = useState<string>('');
  const [job, setJob] = useState<string>("נא הזן תפקיד");
  const [country, setCountry] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [street, setStreet] = useState<string>('');
  const [houseNumber, setHouseNumber] = useState<number>(0);
  const [isMale, setIsMale] = useState<boolean>(false);
  const [isTeacher, setIsTeacher] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);


  const { userId } = useParams<{ userId: string }>();
  console.log("user id to put is", userId);
  
  const token: string | null = localStorage.getItem('userToken');
  if (!token) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:3000/users/${userId}`, {
          method: 'GET',
          headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        const user = data.data
        console.log("user is: ",user);
        

        setFirstName(user.name.first);
        setMiddleName(user.name.middle);
        setLastName(user.name.last);
        setPhone(user.phone);
        setEmail(user.email);
        setImgUrl(user.image.url);
        setImgAlt(user.image.alt);
        setClassroom(user.classroom);
        setJob(user.job);
        setCountry(user.address.country);
        setCity(user.address.city);
        setStreet(user.address.street);
        setHouseNumber(user.address.houseNumber);
        setIsMale(user.setIsMale);
        setIsTeacher(user.isTeacher);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userId, token]);

  const handleSubmitUpdateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const updatedUserData = {
      name: {
        first: firstName,
        middle: (middleName.length>1)?middleName : " ",
        last: lastName,
      },
      phone: phone,
      email: email,
      image: {
        url: (imgUrl.length>0)? imgUrl : isMale? '../../../public/images/male.png' : '../../../public/images/female.png',
        alt: imgAlt
      },
      classroom: classroom,
      job: job,
      address: {
        country: country,
        city: city,
        street: street,
        houseNumber: houseNumber,
      },
      isMale: (isMale)? true : false,
      isTeacher: isTeacher
    };

    const updateUser = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://127.0.0.1:3000/users/${userId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token
          },
          body: JSON.stringify(updatedUserData)
        });
        console.log("updatedUserData is: ", updatedUserData);

        if (!response.ok) {
          throw new Error('Failed to update user');
        }

        if (auth?.userDetails?.isPrincipal || auth?.userDetails?.isTeacher) {
          navigate('/allUsers'); // Redirect to allUsers page after successful update
        } else {
          navigate('/profile'); // Redirect to allUsers page after successful update
        }
      } catch (error) {
        console.error('Error updating user:', error);
      } finally {
        setIsLoading(false);
      }
    };
    updateUser();
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'middleName':
        setMiddleName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'imgUrl':
        setImgUrl(value);
        break;
      case 'imgAlt':
        setImgAlt(value);
        break;
      case 'classroom':
        setClassroom(value);
        break;
      case 'job':
        setJob(value);
        break;
      case 'country':
        setCountry(value);
        break;
      case 'city':
        setCity(value);
        break;
      case 'street':
        setStreet(value);
        break;
      case 'houseNumber':
        setHouseNumber(Number(value));
        break;
      case 'isMale':
        setIsMale(Boolean(value));
        break;
      case 'isTeacher':
        setIsTeacher(Boolean(value));
        break;
      default:
        break;
    }
  };

  return (
    <div className="UpdateUser">
      <Title title={'עדכון פרטי משתמש'} />

      <p>שלום {auth?.userDetails?.name.first}, { !auth?.userDetails?.isMale? 'איזה יפה את היום':''}</p>
      <form onSubmit={handleSubmitUpdateUser} >
        <div className="formContainer">
          <p>פרטי המשתמש של { firstName}</p>
          <div className="formRow" >
            <div>
              <input
                id='firstName'
                type='text'
                name='firstName'
                value={firstName}
                onChange={handleChange}
                placeholder='שם פרטי'
                autoComplete='on'
              />
            </div>
            <div>
              <input
                id='middleName'
                type='text'
                name='middleName'
                value={middleName} // לא לכולם יש יש שני, לכן כדי להימנע משגיעה יוצב רווח במקרה ואין
                onChange={handleChange}
                placeholder='Middle Name'
                autoComplete='on'
              />
            </div>
            <div>
              <input
                id='lastName'
                type='text'
                name='lastName'
                value={lastName}
                onChange={handleChange}
                placeholder='Last Name'
                autoComplete='on'
              />
            </div>
            <label htmlFor='title'>שם מלא</label>
          </div>
          <div className="formRow">
            <div>
              <input
                id='phone'
                type='phone'
                name='phone'
                value={phone}
                onChange={handleChange}
                placeholder='מספר טלפון'
                autoComplete='on'
              />
            </div>
            <div>
              <input
                id='email'
                type='email'
                name='email'
                value={email}
                onChange={handleChange}
                placeholder='דואר אלקטרוני'
                autoComplete='on'
              />
            </div>
            <label htmlFor='phone'>פרטי התקשרות</label>
          </div>
          <div className="formRow">
            <div>
              <input
                id='imgUrl'
                type='text'
                name='imgUrl'
                value={imgUrl}
                onChange={handleChange}
                placeholder='Image URL'
                autoComplete='on'
              />
            </div>
            <div>
              <input
                id='imgAlt'
                type='text'
                name='imgAlt'
                value={imgAlt}
                onChange={handleChange}
                placeholder='Image alt'
                autoComplete='on'
              />
            </div>
            <label htmlFor='image'>תמונת תצוגה</label>
          </div>
          <div className="formRow">
            <div>
              <input
                id='country'
                type='text'
                name='country'
                value={country}
                onChange={handleChange}
                placeholder='מדינה'
                autoComplete='on'
              />
            </div>
            <div>
              <input
                id='city'
                type='text'
                name='city'
                value={city}
                onChange={handleChange}
                placeholder='עיר'
                autoComplete='on'
              />
            </div><div>
              <input
                id='street'
                type='text'
                name='street'
                value={street}
                onChange={handleChange}
                placeholder='רחוב'
                autoComplete='on'
              />
            </div>
            <div>
              <input
                id='houseNumber'
                type='text'
                name='houseNumber'
                value={houseNumber}
                onChange={handleChange}
                placeholder='מספר בית'
                autoComplete='on'
              />
            </div>
            <label htmlFor='country'>כתובת</label>
          </div>
          <div className="formRow">
            <div>
              <input
                id='classroom'
                type='text'
                name='classroom'
                value={classroom}
                onChange={handleChange}
                placeholder='כיתה'
                autoComplete='on'
              />
            </div>
            <label htmlFor='classroom'>כיתה</label>
          </div>
          <div className="formRow">
            <div>
              <input
                id='job'
                type='text'
                name='job'
                value={job}
                onChange={handleChange}
                placeholder='תפקיד'
                autoComplete='on'
              />
            </div>
            <label htmlFor='classroom'>תפקיד</label>
          </div>
          <div className="formRow dFlex">
            <div>
              <span>האם זה בן?</span>
              <input
                id='isMale'
                type='checkbox'
                name='isMale'
                checked={(isMale) ? true : false}
                onChange={handleChange}
                placeholder='האם זה בן? '
                autoComplete='on'
              />
            </div>
            {
              (auth?.userDetails?.isPrincipal || auth?.userDetails?.isTeacher) ?
                <>
                <div>
              <span>האם זה מורה?</span>
              <input
                id='isTeacher'
                type='checkbox'
                name='isTeacher'
                checked={isTeacher}
                onChange={handleChange}
                placeholder='האם זה מורה ??'
                autoComplete='on'
              />
            </div>
                  <label htmlFor='phone'>בחירות</label>
                </>
                : ''
            }
          </div>

          <button type='submit' disabled={isLoading}>עדכן משתמש</button>
        </div>
      </form>

    </div>
  )
}
