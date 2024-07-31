import { useContext, useEffect, useState } from 'react'
import './NewsPage.css'
import DeleteNews from '../../components/DeleteNews/DeleteNews';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { LuClipboardEdit } from 'react-icons/lu';
import { Button, Card } from 'react-bootstrap';


/*interface INewsProps {

}*/
export default function NewsPage(/*props: INewsProps*/) {

    const [news, setNews] = useState(null)
    const [error, setError] = useState(null);

    const auth = useContext(AuthContext);

    useEffect(() => {
        const fetchNews = async () => {
        try {
            const response = await fetch('http://127.0.0.1:3000/news/');
            
            if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            const rep = await data.data
            setNews(rep);
        } catch (error) {
            console.error('Error fetching news:', error);
            setError(error);
        }
        };

        fetchNews();
    }, []);

    if (error) {
        return <div>Error fetching news: {error.message}</div>;
    }
    
    return (
        <div className='News'>
            {
                (news) ?
                    <>
                        <section className="section pt-0" id="news">
                            <div className="container text-center">
                        {news.map((newsItem) => (
                            <div className="news" key={newsItem._id}>
                                <div className="news-img-holder">
                                    <img src={newsItem.image.url} alt={newsItem.image.alt}  class="news-img" />
                                </div>
                                <div className="news-caption">
                                    <p className="section-date">{newsItem.date}</p>
                                    <h2 className="section-title mb-3">{newsItem.title}</h2>
                                    <p>{newsItem.content}</p>
                                    {
                                        (auth?.userDetails?.isPrincipal) ?
                                            <Card className='border-1 border-danger-subtle'>
                                                <Card.Header className='bg-danger-subtle border'>עריכת כתבה ו/או עדכון - מסך מנהל</Card.Header>
                                                <Card.Body className='d-flex gap-3'>
                                                    <DeleteNews id={newsItem._id} />
                                                    <Button><Link to={`/UpdateNews/${newsItem._id}`} className="navbar-brand"><LuClipboardEdit/></Link></Button>
                                                </Card.Body>
                                            </Card>
                                            :''
                                    }
                                </div>          
                            </div>
                        ))}  
                        </div>
                        </section>        
                    </>
                    :
                    <p>bad</p>
            }
        </div>
    )
}


{/*
    <Card className='border-3 border-danger-subtle my-4'>
        <Card.Header className='bg-danger-subtle border'>Visible in DEVELOPMENT MODE only</Card.Header>
        <Card.Body>
            <DeleteNews id={newsItem._id} />
            <Button><Link to={`/UpdateNews/${newsItem._id}`} className="navbar-brand"><LuClipboardEdit/></Link></Button>
        </Card.Body>
    </Card>
        
        */}

