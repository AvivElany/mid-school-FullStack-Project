import { useEffect, useState } from 'react';
import './ContactList.css'
/* import { useNavigate } from 'react-router-dom'; */
import { Card } from 'react-bootstrap';
import ArchiveMessage from '../../components/ArchiveMessage/ArchiveMessage';

/*interface IContactListProps {

}*/
export default function ContactList(/*props: IContactListProps*/) {

    const [messages, setMessages] = useState(null)
    const [loading, setLoading] = useState(true);
    
    /* const navigate = useNavigate() */
        
    const token: null | string = localStorage.getItem('userToken')
    if (!token) return null
    console.log("The token is: ",token);
    

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
        const fetchUsers = async () => {
            try {
            const response = await fetch('http://127.0.0.1:3000/contact/', {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                'x-auth-token': token
                }
                });
            
            const data = await response.json();
            const allMessages = await data.data
                setMessages(allMessages);
                
                console.log(allMessages);
                
            setLoading(false);
            } catch (error) {
            console.error('Error fetching users:', error);
            setLoading(false);
            }
        };

        fetchUsers();
        }, [token]);

    if (loading) {
        return <div>Loading...</div>;
    }


    return (
        <div className='ContactList'>
            {
                (messages.length>0) ?
                    <>
                    <div className="contactContainer">
                            <div className="contactBoard">
                                {
                                    messages.map((message) => (
                                        (!message.isDeleted) ? 
                                            <>
                                                <Card className='border-3 border-info-subtle my-4 singleMessage'>
                                                    <Card.Header className='bg-seccess-subtle border text-end '>{message.sender}</Card.Header>
                                                    <Card.Body>
                                                        {message.message}
                                                    </Card.Body>
                                                            <Card.Footer className='bg-seccess border messagesFooter'>
                                                            <ArchiveMessage id={message._id} />
                                                            <span className='contactRight'>{message.email}</span>
                                                    </Card.Footer>
                                                </Card>
                                            </>
                                            :
                                            ''
                                    ))
                                }
                        </div>
                    </div>
                    </>
                    :
                    ''
            }
        </div>
    )
}
