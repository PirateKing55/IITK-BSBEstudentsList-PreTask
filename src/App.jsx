//
import "./css/style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Card from "./components/Card";

import studentsData from "./components/students-data";
const { bsbeY20, bsbeY21 } = studentsData;

const App = () => {
  return (
    <>
      <Header />

      <h1 id="first-heading">
        <u>BSBE Students of &nbsp; Y-20</u> :
      </h1>

      {bsbeY20.map((data) => {
        return <Card title={data.name} content={data.rollNo} />;
      })}

      <h1 id="second-heading">
        <u>BSBE Students of &nbsp; Y-21</u> :
      </h1>

      {bsbeY21.map((data) => {
        return <Card title={data.name} content={data.rollNo} />;
      })}

      <Footer />
    </>
  );
};

export default App;
