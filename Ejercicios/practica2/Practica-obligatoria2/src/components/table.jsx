import React from 'react';
import PropTypes from 'prop-types';

function Table({ netIncomes }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Marca</th>
          <th>Ingreso Neto</th>
        </tr>
      </thead>
      <tbody>
        {netIncomes.map((income, index) => (
          <tr key={index}>
            <td>{income.brand}</td>
            <td>{income.income}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Table.PropTypes = {
    netIncomes: PropTypes.arrayOf,
    brand: PropTypes.string.isRequired,
    income: PropTypes.number.isRequired
}

export default Table;