import React, { useEffect, useState } from "react";

const Chart = ({ data, isRoot }) => {
  const [expand, setExpand] = useState(false);
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    setPercent(getPerCent());
  }, []);
  const handleClick = () => {
    setExpand(!expand);
  };
  const getPerCent = () => {
    return parseInt((data.totalSales / data.expectedSales) * 100);
  };
  const formatMoney = (number) => {
    return number.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    });
  };
  const getLabel = () => {
    if (percent <= 33) return "At Risk";
    else if (percent <= 66) return "Off Track";
    return "At Track";
  };
  const getLabelColor = () => {
    if (percent <= 33) return "#ff4d4d";
    else if (percent <= 66) return "#e5e600";
    return "#94df3a";
  };
  const getProgressBarBackgroundColor = () => {
    if (percent <= 33) return "#ffe5e5";
    else if (percent <= 66) return "#ffffe5";
    return "rgb(243, 251, 233)";
  };
  const getProgressBarColor = () => {
    if (percent <= 33) return "#ff4d4d";
    else if (percent <= 66) return "#ffff4d";
    return "#94df3a";
  };
  return (
    <div className="grid  gap-4">
      <div className="w-96 justify-self-center">
        <div
          className={`bg-[white] p-4 rounded cursor-pointer ${
            isRoot ? "" : "chart"
          } ${data.children.length > 0 && expand ? "expandable-chart" : ""}`}
          onClick={handleClick}
        >
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl">{data.name}</h1>
            <p className="text-sm">{getPerCent()}% completed</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="">
              <p className="">Total Sales : {formatMoney(data.totalSales)}</p>
              <p className="">
                Target Sales : {formatMoney(data.expectedSales)}
              </p>
            </div>
            <div className="">
              <div
                className={` border  px-2 py`}
                style={{
                  color: getLabelColor(),
                  borderColor: getLabelColor(),
                }}
              >
                {getLabel()}
              </div>
            </div>
          </div>
          <div
            className={` w-[23rem] h-[1rem] max-w-full rounded-xl mt-4`}
            style={{
              background: getProgressBarBackgroundColor(),
            }}
          >
            <div
              className={` h-[1rem] rounded-2xl `}
              style={{
                width: `${percent}%`,
                background: getProgressBarColor(),
              }}
            ></div>
          </div>
        </div>
      </div>
      {expand && data.children.length > 0 ? (
        <div className="grid">
          <hr className="hr" />
          <div className="flex gap-6">
            {data.children.map((child, index) => {
              return <Chart data={child} key={index} isRoot={false} />;
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Chart;
