//
const Card = (props) => {
  return (
      <div className="mk-card">
        <h1>{props.title}</h1>
        <p>
          <b>Roll:</b> {props.content}
        </p>
        <img src="images/iitk-logo.png" alt="pic" width="60px" />
      </div>
  );
};

export default Card;
