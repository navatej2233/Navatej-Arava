import React from 'react';

const StudentForm = ({ student, setStudent, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      {['studentId', 'firstName', 'lastName', 'email', 'department', 'enrollmentYear'].map((field) => (
        <div key={field}>
          <label>{field}</label>
          <input
            type={field === 'enrollmentYear' ? 'number' : 'text'}
            value={student[field] || ''}
            onChange={(e) => setStudent({ ...student, [field]: e.target.value })}
            required
          />
        </div>
      ))}
      <label>Date of Birth</label>
      <input
        type="date"
        value={student.dob?.slice(0, 10) || ''}
        onChange={(e) => setStudent({ ...student, dob: e.target.value })}
        required
      />
      <label>
        Active:
        <input
          type="checkbox"
          checked={student.isActive ?? true}
          onChange={(e) => setStudent({ ...student, isActive: e.target.checked })}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
