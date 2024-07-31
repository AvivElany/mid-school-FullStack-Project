import './GradeChart.css'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import FullName from '../../components/FullName/FullName'

/* interface IGradeChartProps {

} */


export default function GradeChart(/* props: IGradeChartProps */) {

    const auth = useContext(AuthContext)
    

    const calculateAverage = () => {
        if (!auth?.userDetails?.grades) return 0;
            const total = (
                auth?.userDetails?.grades.art +
                auth?.userDetails?.grades.english + 
                auth?.userDetails?.grades.history + 
                auth?.userDetails?.grades.literature + 
                auth?.userDetails?.grades.math + 
                auth?.userDetails?.grades.programming + 
                auth?.userDetails?.grades.sciences
        )
        return (total / 7 );
    };

const average = calculateAverage();

    return (
        <div className='GradeChart Page'>
            {
                (auth?.userDetails?.grades.art) ?
                    <div className="GradeChartCard">
                        <div className="gradeChartName">שלום <FullName /> 
                            {(auth.userDetails.isMale) ? ' היקר' : ' היקרה' }
                        </div>
                        <div className="gradeChartTitle">ואלו הם הציונים המסכמים שנה של עשייה והישגים</div>
                        <div className="gradeChartdiploma">
                            <div className="gradeChartGrades">
                                <div className="gradeChartGrade">{auth?.userDetails.grades.math? auth?.userDetails.grades.math:'אין מידע' }</div>
                                <div className="gradeChartGrade">{auth?.userDetails.grades.english ? auth?.userDetails.grades.english : 'אין מידע' }</div>
                                <div className="gradeChartGrade">{auth?.userDetails.grades.sciences ? auth?.userDetails.grades.sciences : 'אין מידע'}</div>
                                <div className="gradeChartGrade">{auth?.userDetails.grades.history ? auth?.userDetails.grades.history : 'אין מידע'}</div>
                                <div className="gradeChartGrade">{auth?.userDetails.grades.literature ? auth?.userDetails.grades.literature : 'אין מידע'}</div>
                                <div className="gradeChartGrade">{auth?.userDetails.grades.programming ? auth?.userDetails.grades.programming : 'אין מידע' }</div>
                                <div className="gradeChartGrade">{auth?.userDetails.grades.art ? auth?.userDetails.grades.art : 'אין מידע' }</div>
                                
                            </div>
                            <div className="gradeChartsubjects">
                                <div className="gradeChartSubject"><b>מתמטיקה</b></div>
                                <div className="gradeChartSubject"><b>אנגלית</b></div>
                                <div className="gradeChartSubject"><b>מדעים</b></div>
                                <div className="gradeChartSubject"><b>היסטוריה</b></div>
                                <div className="gradeChartSubject"><b>ספרות</b></div>
                                <div className="gradeChartSubject"><b>תכנות</b></div>
                                <div className="gradeChartSubject"><b>אומנות</b></div>
                            </div>
                        </div>
                        <div className='averageGrade'>ציונך הממוצע הינו <br></br><span>{average.toFixed(2)}</span></div>
                    </div>
                    :
                    <p>אין ציונים לכי בבית שלך</p>
            }
        </div>
    )
}
