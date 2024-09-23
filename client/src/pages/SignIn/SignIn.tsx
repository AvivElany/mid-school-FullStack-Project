import './SignIn.css'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { ToastsContext } from '../../context/ToastsContext';
import { Button, Spinner } from 'react-bootstrap';
import DevModeOnly from '../../components/DevModeOnly/DevModeOnly';
import Title from '../../components/Title/Title';

export default function SignIn() {

  const [email,setEmail] = useState<string>('');
  const [password,setPassword] = useState<string>('');

  const [isBusy,setIsBusy] = useState<boolean>(false)

  const auth = useContext(AuthContext);
  const toasts = useContext(ToastsContext)

    const [showPassword, setShowPassword] = useState<boolean>(false);

  
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  const navigate = useNavigate();

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    setIsBusy(true)

    if (!auth) { setIsBusy(false); return }
    const { error } = await auth?.signIn(email,password)

    if (error) {
      toasts?.addToast('⚠️','שגיאה במהלך התחברות',error,'danger')
    } else {
      toasts?.addToast('👍🏼','התחברת בהצלחה',`ברוך הבא !`,'success')  // TODO: add the user's first name with toast
      navigate('/')
    }
    setIsBusy(false)
  }
  
  return (
    <div className='SignIn Page'>
      <Title title="עמוד התחברות" />
      <br></br>

      <form onSubmit={handleSubmit}>

        <input
          type='email'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder='הכנס מייל'
          required
        />

        <br></br><br></br>

        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          placeholder='הכנס סיסמה'
          required
        />
        <br></br><br></br>
        <button className='showPasswordButton' type="button" onClick={toggleShowPassword}>
          {showPassword ? 'Hide Password' : 'Show Password'}
        </button>

        <br></br><br></br>

        <Button type='submit' variant='primary' size='sm' disabled={isBusy}>
          {
          (isBusy) &&
            <Spinner
            className='me-2'
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
            />
          }
          התחבר
        </Button>

      </form>

      <DevModeOnly>
        <Button variant='warning' className='mx-2' onClick={()=> { setEmail('wrong@gmail.com'); setPassword('Wrong123!') } }>WRONG credentials</Button>
        <Button variant='success' className='mx-2' onClick={()=> { setEmail('sharonmiz@gmail.com'); setPassword('Student123!') } }>Student credentials</Button>
        <Button variant='success' className='mx-2' onClick={()=> { setEmail('amoss@gmail.com'); setPassword('Amoss123!') } }>Teacher credentials</Button>
        <Button variant='success' className='mx-2' onClick={()=> { setEmail('principal@gmail.com'); setPassword('Principal123!') } }>Principal credentials</Button>
      </DevModeOnly>
    </div>
  )
}
