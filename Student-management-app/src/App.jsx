import { useState } from 'react'
import './App.css'
import Students from './components/Students';

function App() {

  const [students, setStudents] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [formData, setFormdata] = useState({
    name: '',
    age: '',
    course: '',
    marks: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      id: Date.now(),
      ...formData
    };

    setStudents([
      ...students,
      newStudent
    ]);

    console.log(students);
  };

  const handleChange = (e) => {

    const name = e.target.name;
    const value = e.target.value;

    setFormdata(
      {
        ...formData,
        [name]: value
      }
    );

  }

  // Delete Student
  const handleDelete = (id) => {
    setStudents(
      students.filter(student => student.id !== id)
    );
  }

  let studentFound = false;
  const searchStudent = (name) => {
    studentFound = true;
    setSearchResult(
      students.filter(student => student.name === name)
    );
  }

  return (
    <>
      <div className="container">
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="name">Enter name:</label>
          <input type="text" name='name' onChange={handleChange} id='student-name' />

          <label htmlFor="age">Enter age:</label>
          <input type="number" name='age' onChange={handleChange} id='student-age' />

          <label htmlFor="course">Enter course:</label>
          <input type="text" name='course' onChange={handleChange} id='student-course' />

          <label htmlFor="marks">Enter marks:</label>
          <input type="number" name='marks' onChange={handleChange} id='student-marks' />

          <button type='submit'> Add student</button><br />
          <input type="text" placeholder='search student by name..' name='target-name' id='target-name' onChange={(e) => searchStudent(e.target.value)} />

        </form>
        <div className="students-list">
          {
            students.map((student) => {
              return (

                <Students
                  key={student.id}
                  id={student.id}
                  name={student.name}
                  age={student.age}
                  course={student.course}
                  marks={student.marks}
                  handleDelete={handleDelete}
                />
              )
            })
          }
        </div>
        <div className="search-result-container">
          {searchResult.map((student) => {
            return (
              <>
                <Students
                  key={student.id}
                  id={student.id}
                  name={student.name}
                  age={student.age}
                  course={student.course}
                  marks={student.marks}
                  handleDelete={handleDelete}
                />
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
