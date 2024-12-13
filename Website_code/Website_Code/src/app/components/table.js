import FetchCourses from '@/app/lib/db.js'

const Datasend  =async () =>
{
    const course = await FetchCourses();

    return<div>
        <h1>Course List</h1>
        {course.map((course,index) => (
            <div key={course.CourseID}>
               <ul className='dataul'>
                <li className='datali'>
                    {course.CourseTitle}
                </li>
                <li className='datali'>
                {course.CourseSummary}
                </li>
                <li className='datali'>
                    {course.CourseType}
                </li>
                <li className='datali'>
                 {course.CourseAwardName}
                </li>
                <li className='datali'>
                    {course.UcasCode}
                </li>
                <li className='datali'>
                    {course.UcasPoints}
                </li>
                <li className='datali'>
                    {course.YearOfEntry}
                </li>
                <li className='datali'>
                    {course.ModeOfAttendance}
                </li>
                <li className='datali'>
                    {course.StudyLength}
                </li>
                <li className='datali'>
                    {course.HasFoundationYear}
                </li>
                <li className='datali'>
                    {course.CourseSubject}
                </li>
                <li className='datali'>
                    {course.NoLongerRecruting}
                    </li>
               </ul>
            </div>
        ))}
    </div>
    
}
export default Datasend;

