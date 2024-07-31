import SignIn from '../../pages/SignIn/SignIn'
import './NoPermission.css'

/*interface INoPermissionProps {

}*/
export default function NoPermission(/*props: INoPermissionProps*/) {
    return (
        <div className='NoPermission'>
            you don't have a permition to go this page or you need to log in!
            <SignIn />
        </div>
    )
}
