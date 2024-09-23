import Logo from '../../components/Logo/Logo'
import './Council.css'

/*interface ICouncilProps {

}*/
export default function Council(/*props: ICouncilProps*/) {
    return (
        <div className='Council'>
            <div className="grid">
                <div className="content item1">
                    <h1>מועצת התלמידים של <Logo /> </h1>
                    <p>אנחנו כאן תמיד בשבילכם לכל שאלה ובעיה שצצה, החל משיעור שלא הובן, בקשות להוספת תרגולים, פרויקטים אישיים ומה קורה עם ההשמה?</p> 
                </div>
                <div className="card item2">
                    <h2>פרויקטים אישיים ומה קורה עם ההשמה?</h2>
                </div>
                <div className="card item3"></div>
                <div className="card item4"></div>
                <div className="card item5">
                        <h2>בקשות להוספת תרגולים</h2>
                </div>
                <div className="card item7">
                    ואנחנו תמיד כאן בשבילכם
                    <br></br>
                    השאירו פנייה בצור קשר ונחזור אליכם במהרה!</div>
                <div className="card item8">
                        <h2>לכל שאלה ובעיה שצצה, החל משיעור שלא הובן</h2>
                </div>
                <div className="card item9"></div>
                <div className="card item10"></div>
                <div className="card item11">
                    <Logo />
                </div>
            </div>
        </div>
    )
}
