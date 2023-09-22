import React, { useState ,useEffect} from 'react'

export default function ListStudent() {
    const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch(`https://64eda6ea1f872182714185be.mockapi.io/students`)
      .then(response => response.json())
      .then(data => setStudents(data));
  }, []);

  const handleDelete = (studentId) => {
    fetch(`https://64eda6ea1f872182714185be.mockapi.io/students/${studentId}`, {
      method: 'DELETE'
    })
      .then(() => {
        const updatedStudents = students.filter(student => student.studentId !== studentId);
        setStudents(updatedStudents);
      });
  };

  const handleEdit = (student) => {
    // Set state to the selected student
    console.log(student);
  };
    return (
        <div>
        {students.map(student => (
          <div key={student.studentId}>
            <p>{student.studentName}</p>
            <p>{student.age}</p>
            <button onClick={() => handleDelete(student.studentId)}>Xóa</button>
            <button onClick={() => handleEdit(student)}>Sửa</button>
          </div>
        ))}
      </div>
    )
}
