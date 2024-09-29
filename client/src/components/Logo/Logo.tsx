import { FaRegCopyright, FaSchool } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <div className='Logo'>
            <Link to={'/'} className="navbar-brand">
                <FaSchool  size={30} color='f87575' />
                <IoSchoolSharp size={30} color='53a2be' style={{ marginLeft: '-17px',marginTop: '-20px', opacity: '0.8' }} />
                <span style={{ fontWeight: '500', color: '#8fc93a', fontFamily: 'monospace', paddingLeft:'5px' }}>Mid School</span>
                <span style={{fontWeight: '300',fontSize: "0.6em"}}> <FaRegCopyright /></span>
            </Link>
        </div>
    )
}
