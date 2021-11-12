import React from 'react';
import { TableContainer } from './styles';

export const Table = ({
  tableHeadItems,
  tableBodyData,
  handleAproveCanditateToTrip,
}) => {
  return (
    <TableContainer>
      <thead>
        <tr>
          <th></th>
          {tableHeadItems.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableBodyData?.map((item, index) => (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.profession}</td>
            <td>{item.applicationText}</td>
            <td>{item.country}</td>

            {handleAproveCanditateToTrip && (
              <td>
                <button onClick={() => handleAproveCanditateToTrip(item.id)}>
                  Aprovar
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </TableContainer>
  );
};
