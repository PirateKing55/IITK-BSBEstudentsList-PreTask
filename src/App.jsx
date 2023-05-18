//
import "./css/style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Card from "./components/Card";

import studentsData from "./components/studentsDB";

function CreateCard({name, rollNo}) {
  return(
    <Card studentName={name} studentRoll={rollNo} />
  )
}

function App() {
  return (
    <>
      <Header />

      <h1 id="first-heading">
        <u>BSBE Students of &nbsp; Y-20</u> :
      </h1>

      <dl className="all-cards">{studentsData.bsbeY20.map(CreateCard)}</dl>

      <h1 id="second-heading">
        <u>BSBE Students of &nbsp; Y-21</u> 
      </h1>

      <dl className="all-cards">{studentsData.bsbeY21.map(CreateCard)}</dl>

      <Footer />
    </>
  );
}

export default App;
