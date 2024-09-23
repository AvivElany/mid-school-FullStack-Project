import './ContactComponent.css'
import { FaEnvelope, FaHome } from 'react-icons/fa'
import { MdSmartphone } from 'react-icons/md'
import { AuthContext } from '../../context/AuthContext'
import { useContext, useState } from 'react'
import { ToastsContext } from '../../context/ToastsContext'
import { useNavigate } from 'react-router-dom'

/*interface IContactProps {

}*/
export default function ContactComponent(/*props: IContactProps*/) {

    
    const [sender, setSender] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [isDeleted, setIsDeleted] = useState<string>('false');
    const [isBusy, setIsBusy] = useState<boolean>(false);

    const auth = useContext(AuthContext);
    const toasts = useContext(ToastsContext)
    const navigate = useNavigate();

    const handleSubmitCreateContact = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsBusy(true);
        if (!auth) { setIsBusy(false); return }

        const newMessage = {
        sender: /* (auth)? auth.userDetails?.name.first : */ sender,
        id: (auth) ? auth.userDetails?._id : '',
        message: message,
        email: /* (auth)? auth.userDetails?.email : */ email,
        phone: /* (auth)? auth.userDetails?.phone : */ phone,
        isDeleted: isDeleted,
        };

        const token: null | string = localStorage.getItem('userToken')
        if (!token) return null

        try {
        const response = await fetch(`http://127.0.0.1:3000/contact`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token,
            },
            body: JSON.stringify(newMessage)
        });


        if (!response.ok) {
            throw new Error('Failed to POST card to data');
        }
        const data = await response.json();
        console.log(data);

        toasts?.addToast('🎉', 'קולולוששששש', 'ההודעה נשלחה בהצלחה!');

        navigate('/news');
        } catch (error) {
        console.error('Error POST card to data:', error);

        toasts?.addToast('⚠️', 'יש בעיה', 'שגיאה בשליחת ההודעה');
        }
    };


    return (
        <div className="ContactComponent">

            <div className="main-section">
                <div className="main-section-header">
                <div className="main-container">
                    <h2>פנו אלינו</h2>
                    <p>אנו במקיף mid-school נעמוד תמיד לצידכם
                        לפניות אל מזכירות בית ספרנו אנא השאירו פניה קריאה ובשפה נאותה
                        לא לשכוח מייל תקין לחזרה ומספר טלפון ונשמח לעמוד לרשותם
                    </p>
                </div>
            </div>

        <div className="main-container">
                <div className="main-row">

                    <div className="contact-info-section">
                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                <FaHome size={50} style={{ margin: '5px', opacity: '0.7' }} />
                            </div>

                            <div className="contact-info-content">
                                <h4>כתובת</h4>
                                <p>הלומדים 12, בת ים</p>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                <MdSmartphone size={50} style={{ margin: '5px', opacity: '0.7' }} />
                            </div>
                        
                        <div className="contact-info-content">
                            <h4>טלפון</h4>
                                <p>03-9752288</p>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                <FaEnvelope size={50} style={{ margin: '5px', opacity: '0.7' }} />
                            </div>

                        <div className="contact-info-content">
                                <h4>דואר אלקטרוני</h4>
                            <p>mid-school@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-section">
                                <form onSubmit={handleSubmitCreateContact} id="contact-form">
                                    <h2>שלח הודעה</h2>
                                    <div className="input-container">
                                    <input
                                        id='sender'
                                        type='text'
                                        onChange={(e) => setSender(e.target.value)}
                                        placeholder='שם מלא'
                                        required
                                        autoComplete='on'
                                    />
                                        <span>שם מלא</span>
                                    </div>

                                    <div className="input-container">
                                        <input
                                        id='email'
                                        type='text'
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder='דואר אלקטרוני'
                                        required
                                        autoComplete='on'
                                        />
                                        <span>דואר אלקטרוני</span>
                                    </div>
                                    
                                    <div className="input-container">
                                        <input
                                        id='phone'
                                        type='text'
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder='טלפון'
                                        required
                                        autoComplete='on'
                                        />
                                        <span>טלפון</span>
                                    </div>
                                    <div className="input-container">
                                        <textarea
                                        id='phone'
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder='כתוב הודעה...'
                                        required
                                        autoComplete='on'
                                        />
                                        <span>כתוב הודעה...</span>
                                    </div>

                                    <div className="input-container">
                                        <input type="submit" value="Send" name=""/>
                                    </div>
                                </form>
                            </div>
                </div>
            </div>
        </div>
    </div>
    )
}
