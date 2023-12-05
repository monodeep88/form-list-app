// src/App.js
import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';

const App = () => {
  const [formDataList, setFormDataList] = useState([]);

  const handleFormSubmit = (formData) => {
    setFormDataList((prevList) => [...prevList, formData]);
  };

  return (
    <div>
      <Form onSubmit={handleFormSubmit} />
      <List data={formDataList} />
    </div>
  );
};

export default App;
