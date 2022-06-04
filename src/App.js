import { useEffect, useState } from "react";
import Chart from "./components/Chart";
import { obj } from "./data";
function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(obj);
  }, []);
  const isDataEmpty = (obj) => Object.keys(obj).length === 0;
  return (
    <div className="min-w-screen min-h-screen w-full h-full p-4">
      <h1 className="text-center text-[2rem] mb-6">Tata Steels</h1>
      {isDataEmpty(data) ? (
        <>Loading.....</>
      ) : (
        <div className="flex justify-center">
          <Chart data={data} isRoot={true} />
        </div>
      )}
    </div>
  );
}

export default App;
