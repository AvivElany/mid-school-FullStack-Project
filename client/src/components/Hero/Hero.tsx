import Logo from '../Logo/Logo'
import './Hero.css'


/*interface IHeroProps {
    
}*/
export default function Hero(/*props: IHeroProps*/) {
    

    return (
        <div className='Hero'>
            <div className="background">
                <div className="text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary-main"><Logo /> </span>
                        <span className="heading-primary-sub">הצלחה מצעד ראשון</span>
                    </h1>
                </div>
            </div>
        </div>
    )
}
