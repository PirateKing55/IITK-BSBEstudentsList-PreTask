//
import Card from "./Card";

function CreateCard(data) {
  return <Card title={data.name} content={data.rollNo} />;
}

export default CreateCard;
