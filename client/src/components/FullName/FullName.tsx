import { useContext } from 'react'
import './FullName.css'
import { AuthContext } from '../../context/AuthContext'

/*interface IFullNameProps {

}*/
export default function FullName(/*props: IFullNameProps*/) {

    const auth = useContext(AuthContext)
    return (
        <span className='FullName'>
            {auth?.userDetails?.name.first} {auth?.userDetails?.name.middle} {auth?.userDetails?.name.last} 
        </span>
    )
}
