import './DeleteUser.css'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { ToastsContext } from '../../context/ToastsContext';
import { useNavigate } from 'react-router-dom';
import { apiBase } from '../../config';
import { BsTrash3 } from 'react-icons/bs';
import { getToken } from '../../services/UserService';

interface IDeleteUserProps {
    id: string
}

export default function DeleteUser(props: IDeleteUserProps) {

    const auth = useContext(AuthContext);
    const toasts = useContext(ToastsContext);
    const navigate = useNavigate();

    const DeleteUser = async (userId: string | null) => {
        if (!auth?.userDetails) {
            navigate('/signin')
        }
        try {
            const token = await getToken();
            if (!token) return ('No token found');

            const response = await fetch(`${apiBase}/users/${userId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token,
                },
            });
            if (!response.ok) {
                throw new Error(`Failed to delete user`);
            }
            toasts?.addToast('🎉', 'הצלחה', 'המשתמש נמחק בהצלחה!');
        } catch (error) {
            toasts?.addToast('⚠️', 'danger', 'תקלה במחיקת משתמש');
        }
    }

    return (
        <>
            <BsTrash3 className='delete-btn' onClick={() => DeleteUser(props.id)} />
        </>
    )
}
