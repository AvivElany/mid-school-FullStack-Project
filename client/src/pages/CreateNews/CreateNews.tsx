import "./CreateNews.css"
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastsContext } from '../../context/ToastsContext';
import { AuthContext } from '../../context/AuthContext';

export default function CreateNews() {

  const [title, setTitle] = useState<string>('')
  const [subtitle, setSubtitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [date, setDate] = useState<string>('');
  const [web, setWeb] = useState<string>('');
  const [imgUrl, setImgUrl] = useState<string>('');
  const [imgAlt, setImgAlt] = useState<string>('');
  const [isBusy, setIsBusy] = useState<boolean>(false);

  const auth = useContext(AuthContext);
  const toasts = useContext(ToastsContext)
  const navigate = useNavigate();

  const handleSubmitCreateNews = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsBusy(true);
    if (!auth) { setIsBusy(false); return }

    const newCardData = {
      title: title,
      subtitle: subtitle,
      content: content,
      date: date,
      web: web,
      image: {
        url: imgUrl,
        alt: imgAlt
      },
      isDeleted: false
    };

    const token: null | string = localStorage.getItem('userToken')
    if (!token) return null

    try {
      const response = await fetch(`http://127.0.0.1:3000/news`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
        body: JSON.stringify(newCardData)
      });


      if (!response.ok) {
        throw new Error('Failed to POST card to data');
      }
      const data = await response.json();
      console.log(data);

      toasts?.addToast('🎉', 'הצלחה', 'העדכון פורסם בהצלחה!');

      navigate('/news');
    } catch (error) {
      console.error('Error POST card to data:', error);

      toasts?.addToast('⚠️', 'danger', 'שגיאה בפרסום עדכון');
    }
  };

  return (
    <div className="CreateNews">
      <div className="title">
        <h1>יצירת עדכון</h1>
      </div>
      <hr />

      <form onSubmit={handleSubmitCreateNews} >
        <div className="formContainer">
          
          <div className="formRow" >
            
            <div>
              <input
                id='title'
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='כותרת'
                required
                autoComplete='on'
              />
            </div>
            <div>
              <input
                id='subtitle'
                type='text'
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                placeholder='כותרת משנה'
                required
                autoComplete='on'
              />
            </div>
            <label htmlFor='title'>כותרת וכותרת משנה</label>

          </div>
          <div className="formRow">
            <div>
              <textarea
                id='content'
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder='תוכן העדכון'
                required
                autoComplete='on'
              />
            </div>
            <label htmlFor='phone'>תוכן</label>
          </div >
          <div className="formRow">
            <div>
              <input
                id='date'
                type='text'
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder='date'
                required
                autoComplete='on'
              />
            </div>
            <label htmlFor='phone'>תאריך</label>
          </div >
          <div className="formRow">
            <div>
              <input
                id='web'
                type='text'
                value={web}
                onChange={(e) => setWeb(e.target.value)}
                placeholder='Web URL'
                autoComplete='on'
              />
            </div>
            <label htmlFor='web'>קישור חיצוני</label>
          </div>
          <div className="formRow">
            <div>
              <input
                id='imgUrl'
                type='text'
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
                placeholder='תמונה'
                required
                autoComplete='on'
              />
            </div>
            <div>
              <input
                id='imgAlt'
                type='text'
                value={imgAlt}
                onChange={(e) => setImgAlt(e.target.value)}
                placeholder='שם לתמונה'
                required
                autoComplete='on'
              />
            </div>
            <label htmlFor='web'>תמונה</label>
          </div>


          <button type='submit' disabled={isBusy}>צור עדכון חדש</button>
        </div>
      </form>
    </div>
  )
}
