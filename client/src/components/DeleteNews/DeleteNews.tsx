import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './DeleteNews.css'
import { ToastsContext } from '../../context/ToastsContext';
import { useNavigate } from 'react-router-dom';
import { apiBase } from '../../config';
import { getToken } from '../../services/UserService';
import { BsTrash3 } from 'react-icons/bs';
import { Button } from 'react-bootstrap';

interface IDeleteNewsProps {
    id: string
}
export default function DeleteNews(props: IDeleteNewsProps) {

    const auth = useContext(AuthContext);
    const toasts = useContext(ToastsContext);
    const navigate = useNavigate();

    const DeleteNews = async (newsId: string | null) => {
        if (!auth?.userDetails) {
            navigate('/signin')
        }
        try {
            const token = await getToken();
            if (!token) return ('No token found');

            const response = await fetch(`${apiBase}/news/${newsId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token,
                },
            });
            if (!response.ok) {
                throw new Error(`Failed to delete user`);
            }
            toasts?.addToast('🎉', 'הצלחה', 'העדכון נמחק בהצלחה!');
            navigate('/news')
        } catch (error) {
            toasts?.addToast('⚠️', 'danger', 'תקלה במחיקת העדכון');
        }
    }

    return (
        <div className='DeleteNews'>
            <Button variant="outline-danger" onClick={() => DeleteNews(props.id)}><BsTrash3 /></Button>
        </div>
    )
}
