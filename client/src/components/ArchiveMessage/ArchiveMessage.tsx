import { useContext, useState } from 'react'
import './ArchiveMessage.css'
import { Button } from 'react-bootstrap';
import { BsTrash3 } from 'react-icons/bs';
import { AuthContext } from '../../context/AuthContext';
import { ToastsContext } from '../../context/ToastsContext';
import { useNavigate } from 'react-router-dom';

interface IArchiveMessageProps {
id: string
}
export default function ArchiveMessage(props: IArchiveMessageProps) {
    
    const auth = useContext(AuthContext);
    const toasts = useContext(ToastsContext);
    const navigate = useNavigate();


    const handleClick = async () => {
        const token = localStorage.getItem('userToken');
        if (!token) {
            console.error('Token not found');
            return;
        }

        console.log(props.id);
        

        try {
            const response = await fetch(`http://127.0.0.1:3000/contact/${props.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token
                },
                body: JSON.stringify({ isDeleted: true })
            });

            
            if (!response.ok) {
                throw new Error(`Failed to delete user`);
            }
            toasts?.addToast('🎉', 'הצלחה', 'ההודעה נמחקה בהצלחה!');
            navigate('/ContactList')
        } catch (error) {
            toasts?.addToast('⚠️', 'danger', 'תקלה במחיקת ההודעה');
        }
    };


    return (
        <div className='ArchiveMessage'>
            <Button variant="outline-danger" onClick={handleClick}><BsTrash3 /></Button>
        </div>
    )
}
