import React, {useEffect,useState} from 'react';
import { Line , Doughnut } from "react-chartjs-2";
import "./App.css";
import { useScreenshot } from "use-screenshot-hook";
import icon from "../src/img/icon.png";







let seconds = new Date().getSeconds();

let a = ['1' , '2'];


const App = () => {
  const [getData, setData] = useState([]);

 
  
  useEffect(() => {
    
    

    fetch("http://192.168.43.112:3001/online" , {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
       },
      


    })
    .then(response => response.json())
    .then(data =>  setData(data));
   


  });

  const dataPie = {
  labels: [
    'Online',
    'Offline',
    
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [ getData.onlineTime,getData.offlineTime],
    backgroundColor: ['rgb(54, 162, 235)',
      'rgb(255, 99, 132)',
      
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 2
  }]
};

  const data = {
  labels: getData.labels,
  datasets: [
    {
      label: "Renuka",
      data:  getData.online , 
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    }
  
  ]
};

 return (

    <div className="App">
      <div className="Navbar">
        <img src={icon} />
        <h1 className="heading">Whatsapp Tracker</h1>
      </div>
      <Line data={data} />
      <div className="Pie">
    
      <Doughnut data={dataPie} />
      </div>
      <div className="logo">
      <p className="counter">Counter</p>
<h1>{getData.onlineTime} Min</h1>
      </div>
      
  
    </div>
  );
}
export default App;