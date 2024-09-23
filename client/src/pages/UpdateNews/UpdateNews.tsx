import { useContext, useEffect, useState } from 'react';
import './UpdateNews.css'
import { useNavigate, useParams } from 'react-router-dom';
import { ToastsContext } from '../../context/ToastsContext';
import { Button } from 'react-bootstrap';

/*interface IUpdateNewsProps {

}*/
export default function UpdateNews(/*props: IUpdateNewsProps*/) {

    const toasts = useContext(ToastsContext)


    const navigate = useNavigate();
    const [title, setTitle] = useState<string>('')
    const [subtitle, setSubtitle] = useState<string>('')
    const [content, setContent] = useState<string>('')
    const [date, setDate] = useState<string>('');
    const [web, setWeb] = useState<string>('');
    const [imgUrl, setImgUrl] = useState<string>('');
    const [imgAlt, setImgAlt] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);



    const { newsId } = useParams<{ newsId: string }>();
    const token: string | null = localStorage.getItem('userToken');
    if (!token) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const fetchNewsData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:3000/news/${newsId}`, {
                    method: 'GET',
                    headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch news data');
                }
                const data = await response.json();
                const news = data.data
                console.log("news is: ",news);

                
                setWeb(news.web);
                setDate(news.date);
                setTitle(news.title);
                setContent(news.content);
                setImgUrl(news.image.url);
                setImgAlt(news.image.alt);
                setSubtitle(news.subtitle);
            } catch (error) {
                console.error('Error fetching news data:', error);
            }
        };

    fetchNewsData();
    }, [newsId, token]);

    const handleSubmitUpdateNews = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const updatedNewsData = {
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

        const updateGrades = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`http://127.0.0.1:3000/news/${newsId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': token
            },
            body: JSON.stringify(updatedNewsData)
            });
            console.log("updatedNewsData is: ", updatedNewsData);

            if (!response.ok) {
            throw new Error('Failed to update news');
            }

            toasts?.addToast('👍🏼',`הצלחה !`,`עדכון הכתבה בוצע בהצלחה`)
            
            navigate('/news'); // Redirect to news page after successful update
        } catch (error) {
            toasts?.addToast('⚠️','שגיאה במהלך עדכון הציונים','danger')
            console.error('Error updating news:', error);
        } finally {
            setIsLoading(false);
        }
        };
        updateGrades();
    }
    
    return (
        <div className='UpdateNews'>
            <div className="title">
            <h1>עדכון כתבה</h1>
        </div>
        <hr />

        <form onSubmit={handleSubmitUpdateNews} >
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
                        <label htmlFor='title'>כותרת</label>
                </div>
                <div className="formRow" >
                    <div>
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
                    </div>
                        <label htmlFor='title'>כותרת משנה</label>
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
                        placeholder='כתובת תמונה'
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
                    
            <Button className="sumitButton" type='submit' disabled={isLoading}>עדכן כתבה</Button>
            </div>
        </form>
        </div>
    )
}