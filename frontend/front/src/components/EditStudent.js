import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudentForm from './StudentForm';
import { useParams, useNavigate } from 'react-router-dom';

const EditStudent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://studentdb-backend-d10u.onrender.com/students/${id}`).then(res => setStudent(res.data));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`https://studentdb-backend-d10u.onrender.com/students/${id}`, student);
    alert("Student updated!");
    navigate('/');
  };

  return <StudentForm student={student} setStudent={setStudent} handleSubmit={handleSubmit} />;
};

export default EditStudent;
