import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TransactionsTable from './components/TransactionsTable';
import TransactionsStatistics from './components/TransactionsStatistics';
import TransactionsBarChart from './components/TransactionsBarChart';
import './App.css';

const App = () => {
  const [selectedMonth, setSelectedMonth] = useState(13); 

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  return (
    <Router>
      <div className="App">
        <header className="navbar">
          <h1>Transaction Dashboard</h1>
          
          <nav>
            <ul>
              <button className = "button1"><li>  <Link to="/">Transactions Table   </Link></li></button>
              <button className = "button1"><li>  <Link to="/statistics">Statistics & Bar Chart</Link></li></button>
            </ul>
          </nav>
        </header>

        
        <label htmlFor="month" className="month-label">Select Month: </label>
        <select id="month" value={selectedMonth} onChange={handleMonthChange} className="month-selector">
          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec','NA'].map((month, index) => (
            <option key={index} value={index + 1}>
              {month}
            </option>
          ))}
        </select>

        
        <Routes>
          <Route path="/" element={<TransactionsTable selectedMonth={selectedMonth} />} />
          <Route path="/statistics" element={
            <>
              <TransactionsStatistics selectedMonth={selectedMonth} />
              <TransactionsBarChart selectedMonth={selectedMonth} />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
