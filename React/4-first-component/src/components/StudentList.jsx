const StudentList=()=>{
    const students=['Kiran','Jashan','Aman','Parneet','Mandeep','Manpreet']
    return <ol>
        {
            students.map((student,index)=><li key={student}>{student}</li>)
            }
    </ol>;
}
export default StudentList;