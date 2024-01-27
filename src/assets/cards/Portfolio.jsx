import React from "react";
import styled from "styled-components";

import { Chart } from "react-google-charts";

export const data = [
  ["Company", "Amount"],
  ["Bajaj Finserv", 25000],
  ["Shriram Finance", 20000],
  ["Mahindra Finance", 15000],
  ["Utkarsh Small Finance Bank", 40000],
];

export const options = {
  pieSliceText: "value",
  fontSize: 10,
  legend: {
    alignment: "center",
    textStyle: { fontSize: 10 },
  },
  chartArea: {
    left: 0,
    top: 20,
    right: 0,
    bottom: 10,
    width: "168px",
    height: "168px",
  },
  title: "",
  slices: {
    0: { color: "#6C63FF" },
    1: { color: "#FA9D17" },
    2: { color: "#B9C606" },
    3: { color: "#59CBD3" },
  },
};

const Portfolio = () => {
  const Outersection = styled.div`
    width: 398px;
    height: 286px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 5px 10px #0000000d;
    border: 1px solid #ebebeb;
    border-radius: 5px;
    padding: 1.5rem;
  `;

  return (
    <Outersection>
      <div className="flex justify-between items-center">
        <div className="text-base font-bold">Your FD Portfolio</div>
        <select className="border-2 rounded-md px-4 py-2">
          <option>Deposit Amt</option>
        </select>
      </div>
      <div className="fd-portfolio-graph">
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"100%"}
        />
      </div>
    </Outersection>
  );
};

export default Portfolio;
