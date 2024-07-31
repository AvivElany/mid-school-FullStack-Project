import { useContext, useEffect, useState } from 'react';
import './Staff.css'
import { LuClipboardEdit } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthContext';


interface IStaff {
    _id: string
    mane: { first: string, middle: string, last:string}
    job: string
    address: { street:string, houseNumber:number, city:string }
    image: { url: string, alt: string }
    email: string
}

export default function Staff() {

    const auth = useContext(AuthContext)
    
    const [staff, setStaff] = useState<IStaff|null>(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://127.0.0.1:3000/staff/');
                const data = await response.json();
                const allUsers = await data.data
                setStaff(allUsers);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching staff:', error);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='Staff'>
            <h1>סגל אקדמי</h1>
            <ol>
                {
                    (staff) ?
                        <>
                            <div className="cardFlex" key={staff.email}>
                                {staff.map(staff => 
                                    <>
                                        <div className="card" key={staff._id}>
                                            <img src={ staff.image.url} alt={ staff.image.alt} className="card-image" />
                                            <p className="card-name" key={staff._id}>{staff.name.first} {staff.name.middle} {staff.name.last}</p>
                                            <div className="grid-container" key={staff.job}>
                                                {staff.job}
                                            </div>
                                            <div className="editStaff">
                                            {
                                                (auth?.userDetails?.isPrincipal) ?
                                                    <Button variant="outline-success" size='sm' className='mx-3'>
                                                        <Link to={`/UpdateStaff/${staff._id}`} className="navbar-brand"><LuClipboardEdit />ערוך את {staff.name.first}</Link>
                                                    </Button>
                                                    : ''
                                            }
                                            </div>
                                        </div>
                                        </>
                        )}
                                </div>
                        </>
                        :
                        <p>אוי... ככל הנראה שיש לנו בעיה =/</p>
                }
            </ol>
        </div>
    )
}
