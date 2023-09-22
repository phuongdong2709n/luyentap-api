import React,{ useState ,useEffect} from 'react'

export default function StudentList() {

    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [studentName, setStudentName] = useState('');
    const [age, setAge] = useState('');
  
    useEffect(() => {
      fetch('https://64eda6ea1f872182714185be.mockapi.io/students')
        .then(response => response.json())
        .then(data => setStudents(data));
    }, []);
  
    const handleEdit = (student) => {
      setSelectedStudent(student);
      setStudentName(student.studentName);
      setAge(student.age);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      fetch('https://64eda6ea1f872182714185be.mockapi.io/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ studentName, age })
      })
        .then(() => {
          setStudentName('');
          setAge('');
          fetch('https://64eda6ea1f872182714185be.mockapi.io/students')
            .then(response => response.json())
            .then(data => setStudents(data));
        });
    };

    const handleUpdate = () => {
      fetch(`https://64eda6ea1f872182714185be.mockapi.io/students/${selectedStudent.studentId}`, { //gửi 1 yêu cầu đến api
        method: 'PUT', // yêu câu PUT
        headers: { 
          'Content-Type': 'application/json' //chỉ định kiểu dữ liệu body là JSON
        },
        body: JSON.stringify({ studentName, age }) //chuyển đổi đối tượng chứa thông tin sinh viên thành 1 chuỗi JSON
      })
        .then(() => {
          setSelectedStudent(''); //cập nhập lại state
          setStudentName('');
          setAge('');
          fetch('https://64eda6ea1f872182714185be.mockapi.io/students') //lấy danh sách sinh viên
            .then(response => response.json())
            .then(data => setStudents(data));
        });
     
    };
  
   // JSON dùng để chuyển đổi hoặc định dạng dữ liệu dựa trên văn bản
  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map(student => (
          <li key={student.studentId}>
            {student.studentName} ({student.age})
            <button onClick={() => handleEdit(student)}>Edit</button>
          </li>
        ))}
      </ul>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Student Name:
          <input type="text" value={studentName} onChange={(event) => setStudentName(event.target.value)} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" value={age} onChange={(event) => setAge(event.target.value)} />
        </label>
        <br />
        <button type="submit">Add</button>
      </form>
      {selectedStudent && (
        <div>
          <h2>Edit Student</h2>
          <form onSubmit={handleUpdate}>
            <label>
              Student Name:
              <input type="text" value={studentName} onChange={(event) => setStudentName(event.target.value)} />
            </label>
            <br />
            <label>
              Age:
              <input type="number" value={age} onChange={(event) => setAge(event.target.value)} />
            </label>
            <br />
            <button type="submit">Update</button>
          </form>
        </div>
      )}
    </div>
  )
}
