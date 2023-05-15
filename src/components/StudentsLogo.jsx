//
import { useState, useEffect } from "react";

function MKAPI() {
  // const url = "https://www.boredapi.com/api/activity";
  const url = "https://www.boredapi.com/api/activity";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (<div className="API">
    <h1>{data.activity}</h1>
    <h1>{data.type}</h1>
  </div>);
}

export default MKAPI;