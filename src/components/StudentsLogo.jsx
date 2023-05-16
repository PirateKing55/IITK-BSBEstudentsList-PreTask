//
import { useState, useEffect } from "react";

function StudentsLogo() {
  const url =
    "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature";
  const [data, setData] = useState({});

  async function fetchInfo() {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  if (!data.urls) return null;

  return (
    <div>
      <img className="student-logo" src={data.urls.regular} />
    </div>
  );
}

export default StudentsLogo;
