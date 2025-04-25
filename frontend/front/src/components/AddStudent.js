import React, { useState } from 'react';
import axios from 'axios';
import StudentForm from './StudentForm';
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
  const [student, setStudent] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('https://studentdb-backend-d10u.onrender.com', student);
    alert("Student added!");
    navigate('/');
  };

  return <StudentForm student={student} setStudent={setStudent} handleSubmit={handleSubmit} />;
};

export default AddStudent;
