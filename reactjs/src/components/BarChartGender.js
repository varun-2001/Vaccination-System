import React from "react";

import { Bar } from "react-chartjs-2";

const BarChartGender = () => {
    const [data, setData] = React.useState({});
    
    const chart = () => {
        // initialize male array with 0s 
        let male = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        let female = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        let others = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        let age = [11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
        fetch("http://localhost:3001/results")
        .then((res) => res.json())
        .then((res) => {
            // sort res by age
            res.sort((a, b) => a.age - b.age);
            for (const dataObj of res) {
                // if male then push into male array
                if (dataObj.gender==="Male"){
                    male[dataObj.age - 11] = (dataObj.count);
                }
                else if (dataObj.gender==="Female"){
                    female[dataObj.age - 11] = (dataObj.count);
                }
                else{
                    others[dataObj.age - 11] = (dataObj.count);
                }
            }

            setData({
            labels: age,
            datasets: [
                {
                    label: "Male",
                    data: male,
                    backgroundColor: "rgba(0,0,255,0.5)",
                    borderWidth: 4,
                },
                {
                    label: "Female",
                    data: female,
                    backgroundColor: "rgba(255, 0 , 0, 0.5)",
                    borderWidth: 4,
                },
                {
                    label: "Other",
                    data: others,
                    backgroundColor: "rgba(0, 255, 0, 0.5)",
                    borderWidth: 4,
                },
            ],
            });
        });
    };
    
    React.useEffect(() => {
        chart();
    }, []);
    return (
        <div>
            <h1>Bar Chart</h1>
        <Bar
            data={data}
            options={{
            layout:{
                padding: 100
            },
            responsive: true,
            scales: {
                yAxes: [
                {
                    ticks: {
                    maxTicksLimit: 10,
                    beginAtZero: true,
                    },
                    gridLines: {
                    display: false,
                    },
                },
                ],
                xAxes: [
                {
                    gridLines: {
                    display: true,
                    },
                },
                ],
            },
            }}
        />
        </div>
    );
    };

export default BarChartGender;
