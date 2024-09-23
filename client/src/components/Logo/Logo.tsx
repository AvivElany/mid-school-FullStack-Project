import { FaRegCopyright, FaSchool } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <div className='Logo'>
            <Link to={'/'} className="navbar-brand">
                <FaSchool  size={30} color='red' />
                <IoSchoolSharp size={30} color='orange' style={{ marginLeft: '-15px', opacity: '0.7' }} />
                <span style={{ fontWeight: '500', fontFamily: 'monospace', paddingLeft:'5px' }}>Mid School</span>
                <span style={{fontWeight: '300',fontSize: "0.7em"}}> <FaRegCopyright /></span>
            </Link>
        </div>
    )
}
