import "./UpdateGrades.css";
import { Button } from "react-bootstrap";
import Title from "../../components/Title/Title";
import { AuthContext } from "../../context/AuthContext";
import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastsContext } from '../../context/ToastsContext';


export default function UpdateGrades() {

  const auth = useContext(AuthContext)
  const toasts = useContext(ToastsContext)


  const navigate = useNavigate();
  const [art, setArt] = useState<number>();
  const [math, setMath] = useState<number>();
  const [english, setEnglish] = useState<number>();
  const [history, setHistory] = useState<number>();
  const [sciences, setSciences] = useState<number>();
  const [firstName, setFirstName] = useState<number>();
  const [middleName, setMiddleName] = useState<number>();
  const [lastName, setLastName] = useState<number>();
  const [literature, setLiterature] = useState<number>();
  const [programming, setProgramming] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(false);


  const { userId } = useParams<{ userId: string }>();
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
        
        setFirstName(user.name.first)
        setMiddleName(user.name.middle)
        setLastName(user.name.last)
        setMath(user.grades.math);
        setEnglish(user.grades.english);
        setSciences(user.grades.sciences);
        setHistory(user.grades.history);
        setLiterature(user.grades.literature);
        setProgramming(user.grades.programming);
        setArt(user.grades.art);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userId, token]);

  const handleSubmitUpdateGrades = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const updatedUserData = {
      grades: {
        math: math,
        english: english,
        sciences: sciences,
        history: history,
        literature: literature,
        programming: programming,
        art: art
        },
    };

    const updateGrades = async () => {
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

        toasts?.addToast('👍🏼',`הצלחה !`,`עדכון הציונים של ${firstName} ${middleName} ${lastName} בוצע בהצלחה`)
        
        navigate('/allUsers'); // Redirect to allUsers page after successful update
      } catch (error) {
        toasts?.addToast('⚠️','שגיאה במהלך עדכון הציונים','danger')
        console.error('Error updating user:', error);
      } finally {
        setIsLoading(false);
      }
    };
    updateGrades();
  }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'math':
        setMath(value);
        break;
      case 'english':
        setEnglish(value);
        break;
      case 'sciences':
        setSciences(value);
        break;
      case 'history':
        setHistory(value);
        break;
      case 'literature':
        setLiterature(value);
        break;
      case 'programming':
        setProgramming(value);
        break;
      case 'art':
        setArt(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="UpdateGrades">
      <Title title={'עריכת גליון ציונים'} />

      <p>שלום {auth?.userDetails?.name.first}, { !auth?.userDetails?.isMale? 'איזה יפה את היום':''}</p>
      <form onSubmit={handleSubmitUpdateGrades} >
        <div className="formContainer">
          <p>עריכת גליון הציונים של { firstName}</p>

          <div className="gradeChartdiploma">
            <div className="updateGradesRow" >
            <div>
                <input
                  className="updateGradesInput"
                  id='math'
                  type='number'
                  name='math'
                  value={math}
                  onChange={handleChange}
                  placeholder='מתמטיקה'
                  autoComplete='on'
              />
            </div>
            <div>
                <input
                  className="updateGradesInput"
                  id='english'
                  type='number'
                  name='english'
                  value={english}
                  onChange={handleChange}
                  placeholder='אנגלית'
                  autoComplete='on'
              />
            </div>
            <div>
                <input
                  className="updateGradesInput"
                  id='sciences'
                  type='number'
                  name='sciences'
                  value={sciences}
                  onChange={handleChange}
                  placeholder='מדעים'
                  autoComplete='on'
                />
            </div>
            <div>
                <input
                  className="updateGradesInput"
                  id='history'
                  type='number'
                  name='history'
                  value={history}
                  onChange={handleChange}
                  placeholder='היסטוריה'
                  autoComplete='on'
                />
            </div>
            <div>
                <input
                  className="updateGradesInput"
                  id='literature'
                  type='number'
                  name='literature'
                  value={literature}
                  onChange={handleChange}
                  placeholder='ספרות'
                  autoComplete='on'
                />
            </div>
            <div>
                <input
                  className="updateGradesInput"
                  id='programming'
                  type='number'
                  name='programming'
                  value={programming}
                  onChange={handleChange}
                  placeholder='תכנות'
                  autoComplete='on'
                />
            </div>
            <div>
                <input
                  className="updateGradesInput"
                  id='art'
                  type='number'
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
      </form>

    </div>
  )
}
