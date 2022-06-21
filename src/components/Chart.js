import React, { useContext } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { GlobalContext } from "../context/GlobalState";

function Chart(props) {
  const { transactions } = useContext(GlobalContext);

  console.log("This is inside chart transactions", transactions);
  console.log(
    "This is inside chart  transactions.text",
    transactions.map((transaction) => transaction.text)
  );
  console.log("This is inside chart  transactions.amount", transactions.amount);

  const BarData = {
    labels: transactions.map((transaction) => transaction.text),
    datasets: [
      {
        label: "Expenses with cateogory",
        data: transactions.map((transaction) => transaction.amount),
        // data: [617594, 181045, 153060, 106519, 105162, 95072],

        //backgroundColor:'green',
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 99, 132, 0.6)",
        ],
      },
    ],
  };
  const LineData = {
    labels: transactions.map((transaction) => transaction.startDate),
    datasets: [
      {
        label: "Expenses over time",
        data: transactions.map((transaction) => transaction.amount),
        // data: [617594, 181045, 153060, 106519, 105162, 95072],

        //backgroundColor:'green',
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 99, 132, 0.6)",
        ],
      },
    ],
  };

  console.log("This is chart data", BarData);

  return (
    <div className="chart">
      <Bar
        data={BarData}
        options={{
          title: {
            display: "Test",
            text: "Test",
            fontSize: 25,
          },
          legend: {
            display: "Test",
            position: "Test",
            labels: {
              fontColor: "#000",
            },
          },
        }}
      />
      <Line
        data={LineData}
        options={{
          title: {
            display: "Test",
            text: "Test",
            fontSize: 25,
          },
          legend: {
            display: "Test",
            position: "Test",
            labels: {
              fontColor: "#000",
            },
          },
        }}
      />
 
    </div>
  );
}

Chart.defaultProps = {
  displayTitle: true,
  displayLegend: false,
  legendPosition: "bottom",
};

export default Chart;
