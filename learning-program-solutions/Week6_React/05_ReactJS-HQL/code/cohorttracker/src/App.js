// src/App.js
import React from 'react';
import CohortDetails from './components/CohortDetails';

function App() {
  const cohort = {
    name: 'Cohort Dashboard',
    batch: 'FS-2025 - MERN Stack',
    startDate: '2025-01-01',
    status: 'In Progress',
    coach: 'John Doe',
    trainer: 'Jane Smith',
  };

  return (
    <div>
      <CohortDetails cohort={cohort} />
    </div>
  );
}

export default App;
