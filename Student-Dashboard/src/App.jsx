import StudentCard from './Components/StudentCard';
import './App.css'

const Students = [
  {
    id: 1,
    name: "Swapnil",
    rno: 104,
    marks: 99
  },
  {
    id: 2,
    name: "Pritam",
    rno: 70,
    marks: 89
  },
  {
    id: 3,
    name: "Ritesh",
    rno: 74,
    marks: 80
  }, {
    id: 4,
    name: "Shivraj",
    rno: 89,
    marks: 35
  },
  {
    id: 5,
    name: "Prashant",
    rno: 64,
    marks: 96
  },
  {
    id:6,
    name:"Prem",
    rno:69,
    marks:59
  }
];
function App() {

  return (
    <>
      <div>
        <h1 className='Dashboard-title'>Student Dashboard</h1>

        <div className='dashboard'>

          {Students.map((student) => {
            return (
              <StudentCard
                key={student.id}
                name={student.name}
                rno={student.rno}
                marks={student.marks}
              />
            );
          })}
        </div>

      </div>
    </>
  )
}

export default App
