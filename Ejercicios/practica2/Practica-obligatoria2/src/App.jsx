import React from 'react';
import Table from './components/table';

function App() {
  const netIncomes = [
    { brand: 'McDonalds', income: 1291283 },
    { brand: 'Burger King', income: 1927361 },
    { brand: 'KFC', income: 1098463 }
  ];

  const ingresoTotal = netIncomes.reduce((sum, company) => sum + company.income, 0);
  const ingresoPromedio = ingresoTotal / netIncomes.length;

  return (
    <div>
      <Table netIncomes={netIncomes} />
      <p>Promedio de Ingreso Neto: ${ingresoPromedio.toFixed(2)}</p>
    </div>
  );
}

export default App;