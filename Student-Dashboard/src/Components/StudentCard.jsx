function StudentCard({ name, rno, marks }) {

    return (
        <div className="container">

            <div className="studentInfo">

                <h3>Student Name: {name}</h3>

                <h4>Student Roll.No: {rno}</h4>

                <h4>Student Marks: {marks}</h4>

                {marks >= 40 ? (
                    <p className="pass">Pass</p>
                ) : (
                    <p className="fail">Fail</p>
                )}

            </div>

        </div>
    );

}
export default StudentCard;