import './App.css';
import { React , Component } from 'react';
import LineChartAge from './components/LineChartAge';
import Create from './components/Form';
import Charts from './components/DataTable';
import BarChartGender from './components/BarChartGender';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DataTable from './components/DataTable';
class App extends Component{
  
  render(){
    return (
      <div className="App">

        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Create />} />
            <Route exact path="/data" element={<DataTable />} />
            <Route exact path="/charts" element={<><LineChartAge /><BarChartGender /></>} />

          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}



export default App;
