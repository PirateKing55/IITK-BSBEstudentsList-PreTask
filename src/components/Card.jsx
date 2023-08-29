//
import StudentsLogo from "./StudentsLogo";

function Card({ studentName, studentRoll }) {
  let picUrl = `https://oa.cc.iitk.ac.in/Oa/Jsp/Photo/${studentRoll}_0.jpg`;
  return (
    <div className="mk-card">
      <h1>{studentName}</h1>
      <p>
        <b>Roll:</b> {studentRoll}
      </p>
      {/* <StudentsLogo /> */}
      <div>
        <img className="student-logo" src={picUrl} />
      </div>
    </div>
  );
}

export default Card;
