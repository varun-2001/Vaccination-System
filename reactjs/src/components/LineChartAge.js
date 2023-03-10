import { React, useEffect } from 'react';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';


// Creates LineChartAge that plots a line chart with age on x-axis and count on y-axis

const LineChartAge = () => {
  const [vaccinated, getVaccinated] = useState([{}]);
  const [unvaccinated, getUnvaccinated] = useState([{}]);


  useEffect(()=>{
    fetch('http://localhost:3001/counts?is_vaccinated=false')
    .then(res => res.json())
    .then(data => {
      getUnvaccinated(data);
    })
    fetch('http://localhost:3001/counts?is_vaccinated=true')
    .then(res => res.json())
    .then(data => {
      getVaccinated(data);
    })
  },[]);

  // sort vaccinated data by age
  vaccinated.sort((a, b) => {
    return a.age - b.age;
  });

  let vArray = Array(18).fill(0);
  let uArray = Array(18).fill(0);

  // sort unvaccinated data by age
  unvaccinated.sort((a, b) => {
    return a.age - b.age;
  });

  for (const i of vaccinated) {
    vArray[i.age - 11] = i.count;
  }

  for (const i of unvaccinated) {
    uArray[i.age - 11] = i.count;
  }

  const data = {
    labels : ["11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29"],
    
    _datasets: [
      {
        label: 'Vaccinated',
        data: vArray,
        fill: false,
        backgroundColor: 'rgb(255, 192, 192)',
        borderColor: 'rgba(255,0,0,0.6)',
      },
      {
        label: 'Unvaccinated',
        data: uArray,
        fill: false,
        backgroundColor: 'rgb(255, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
    get datasets() {
      return this._datasets;
    },
    set datasets(value) {
      this._datasets = value;
    },
  };

  const options = {
    layout:{
      padding: 100,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <div className='header'>
        <h1 className='title'>Line Chart</h1>
      </div>
      <Line data={data} options={options} />
    </>
  );
}

export default LineChartAge;