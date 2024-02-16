
import React, { useState, useEffect } from "react";
const ExampleComponent = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await fetch("https://fakestoreapi.com/products");
    const jsonData = await result.json();
    setData(jsonData);
  };

  console.log(data);
  return (
    <div>
      {data.map((item, ind) => <h1 key={ind}>{item.title}</h1>  )}
    </div>
  );
};
export default ExampleComponent;
