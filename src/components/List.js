// src/components/List.js
import React, { useState,useEffect} from 'react';
import './List.css'; // Import the CSS file for styling

const List = ({ data }) => {
 // const [sortedData, setSortedData] = useState(data);
 const [sortedData, setSortedData] = useState([]);
  useEffect(() => {
    setSortedData(data);
  }, [data]);
  const [sortOrder, setSortOrder] = useState({ column: null, order: 'asc' });

  const handleSort = (column) => {
    const newOrder = sortOrder.column === column ? (sortOrder.order === 'asc' ? 'desc' : 'asc') : 'asc';
    const sortedList = [...sortedData].sort((a, b) => {
      const comparison = a[column].localeCompare(b[column]);
      return newOrder === 'asc' ? comparison : -comparison;
    });

    setSortedData(sortedList);
    setSortOrder({ column, order: newOrder });
  };

  return (
    <div className="list-container">
      <table className="data-table">
        <thead>
          <tr>
            <th onClick={() => handleSort('id')}>ID {sortOrder.column === 'id' && (sortOrder.order === 'asc' ? '↑' : '↓')}</th>
            <th onClick={() => handleSort('name')}>Name {sortOrder.column === 'name' && (sortOrder.order === 'asc' ? '↑' : '↓')}</th>
            <th onClick={() => handleSort('image')}>Image {sortOrder.column === 'image' && (sortOrder.order === 'asc' ? '↑' : '↓')}</th>
            <th onClick={() => handleSort('address')}>Address {sortOrder.column === 'address' && (sortOrder.order === 'asc' ? '↑' : '↓')}</th>
            <th onClick={() => handleSort('gender')}>Gender {sortOrder.column === 'gender' && (sortOrder.order === 'asc' ? '↑' : '↓')}</th>
            <th >Action </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.image}</td>
              <td>{item.address}</td>
              <td>{item.gender}</td>
              <td>ADD/EDIT/DELETE</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
