import { FaRegArrowAltCircleUp } from 'react-icons/fa'
import './Top.css'


export default function Top() {
    return (
        <div className='Top'>
            <div className='ScrollToTopButton' >
                <a href="#TOP"><FaRegArrowAltCircleUp className='top'/></a>
            </div>
        </div>
    )
}


