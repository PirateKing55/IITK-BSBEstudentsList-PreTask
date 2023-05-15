//
import StudentsLogo from "./StudentsLogo";

function Card({ studentName, studentRoll }) {
  return (
    <div className="mk-card">
      <h1>{studentName}</h1>
      <p>
        <b>Roll:</b> {studentRoll}
      </p>
      <StudentsLogo />
    </div>
  );
}

export default Card;
