//
import "./css/style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import CreateCard from "./components/CreateCard";

import studentsData from "./components/students-data";
const { bsbeY20, bsbeY21 } = studentsData;

function App() {
  return (
    <>
      <Header />

      <h1 id="first-heading">
        <u>BSBE Students of &nbsp; Y-20</u> :
      </h1>

      <dl className="all-cards">{bsbeY20.map(CreateCard)}</dl>

      <h1 id="second-heading">
        <u>BSBE Students of &nbsp; Y-21</u> :
      </h1>

      <dl className="all-cards">{bsbeY21.map(CreateCard)}</dl>

      <Footer />
    </>
  );
}

export default App;
