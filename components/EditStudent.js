import React, { useState } from 'react'

 function EditStudent({ student, onUpdate }) {
    
    const [studentName, setStudentName] = useState(student.studentName);
    const [age, setAge] = useState(student.age);
  
    const handleSubmit =(event) => {
      event.preventDefault();
      fetch(`https://64eda6ea1f872182714185be.mockapi.io/students/${student.studentId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ studentName, age })
      })
        .then(() => onUpdate());
    };
  
  return (
    <form onSubmit={handleSubmit} >
      <label>
        Tên:
        <input type="text" name='studentName' value={studentName} onChange={(event) => setStudentName(event.target.value)} />
      </label>
      <label>
        Email:
        <input type="text" name='age' value={age} onChange={(ev) => setAge(ev.target.value)} />
      </label>
      <button type="submit">Cập nhật</button>
    </form>
  )
}
export default EditStudent;

