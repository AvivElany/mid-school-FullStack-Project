import './DeleteStaff.css'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { ToastsContext } from '../../context/ToastsContext';
import { useNavigate } from 'react-router-dom';
import { apiBase } from '../../config';
import { BsTrash3 } from 'react-icons/bs';
import { getToken } from '../../services/UserService';
import { Button } from 'react-bootstrap';

interface IDeleteStaffProps {
    id: string
}
export default function DeleteStaff(props: IDeleteStaffProps) {

    const auth = useContext(AuthContext);
    const toasts = useContext(ToastsContext);
    const navigate = useNavigate();

    const deleteStaff = async (staffId: string | null) => {
        if (!auth?.userDetails) {
            navigate('/')
        }
        try {
            const token = await getToken();
            if (!token) return ('No token found');

            const response = await fetch(`${apiBase}/staff/${staffId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token,
                },
            });
            if (!response.ok) {
                throw new Error(`Failed to delete staff crew`);
            }
            toasts?.addToast('🎉', 'הצלחה', 'איש הסגל נמחק בהצלחה!');
            navigate('/')
        } catch (error) {
            toasts?.addToast('⚠️', 'danger', 'תקלה במחיקת איש סגל');
        }
    }

    return (
        <>
            <Button variant='outline-danger' onClick={() => deleteStaff(props.id)}><BsTrash3 className='delete-btn' />למחיקה לחץ כאן</Button>
        </>
    )
}
