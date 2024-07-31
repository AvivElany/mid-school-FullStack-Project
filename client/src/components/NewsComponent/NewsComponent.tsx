import { useEffect, useState } from 'react'
import './NewsComponent.css'


/*interface INewsProps {

}*/
export default function NewsComponent(/*props: INewsProps*/) {

    const [news, setNews] = useState(null)
    const [error, setError] = useState(null);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (error) {
        return <div>Error fetching news: {error.message}</div>;
    }
    
    return (
        <div className='NewsComponent'>
            {
                (news) ?
                    <>
                    <section className="articles">
                        {news.map((newsItem) => (
                            <>
                            <article key={newsItem._id}>
                                <div className="article-wrapper" key={newsItem._id}>
                                <figure>
                                    <img src={newsItem.image.url} alt={newsItem.image.alt}  />
                                </figure>
                                <div className="article-body">
                                    <h2>{newsItem.title}</h2>
                                    <p>{newsItem.content}</p>
                                    <div className="date">{newsItem.date}</div>
                                </div>
                                </div>
                            </article>
                            </>
                        ))}
                        </section>
                    </>
                    :
                    <p>bad</p>
            }
        </div>
    )
}

