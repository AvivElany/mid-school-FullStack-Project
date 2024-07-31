import Logo from '../../components/Logo/Logo'
import './About.css'

/*interface IAboutProps {

}*/
export default function About(/*props: IAboutProps*/) {
    return (
        <div className='About'>
            <div className="aboutContainer">
                <div className="aboutImage">
                    <img alt="golden-lines.png" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/golden%20lines.png" />
                </div>
                <div className="aboutText">
                    <p>
                        <Logo />
                    </p>
                    <p>
                        ברוכים הבאים לאתר הרשמי של חטיבת הביניים-"Mid School"
                        <br></br>
                        אנו גאים להציג את מוסד הלימודים שלנו, הממוקם בלב הקהילה ומוקדש לטיפוח והעשרת תלמידינו. בחטיבה שלנו, אנו שמים דגש על מצוינות אקדמית, פיתוח אישי וחברתי, וסביבה תומכת ומעצימה. אנו מציעים מגוון רחב של תכניות לימודים, פעילויות חוץ-כיתתיות, וחוויות חינוכיות המיועדות לעודד סקרנות, יצירתיות, ושאיפה להצלחה בכל תחומי החיים.</p>
                    <p>
                        <span>דבר מנהלת</span> <br></br>
                        כמנהלת חטיבת הביניים, אני גאה להוביל צוות מורים ומחנכים מסור ומקצועי, אשר שם לו למטרה להעניק לכל תלמיד ותלמידה את הכלים והמשאבים הנדרשים להצלחה. אנו מאמינים בלמידה מבוססת ערכים, הכוללת שיתוף פעולה, כבוד הדדי, ואחריות אישית. אנו מעודדים את תלמידינו לחקור ולהתנסות, להעז ולהשתפר, ובכך לפתח כישורים ויכולות שיסייעו להם לא רק במסגרת בית הספר, אלא גם בחיים האמיתיים.</p>
                    <p>
                        אנו מזמינים אתכם להתרשם מהמגוון הרחב של הפעילויות וההזדמנויות המוצעות בחטיבת הביניים שלנו, ומקווים שתצטרפו אלינו. יחד נמשיך להצעיד את תלמידינו אל עתיד מזהיר ומלא בהישגים.
                    </p>
                    <p>
                        <Logo />
                    </p>
                </div>
            </div>
        </div>
    )
}