import React from 'react'

const Students = ({id , name , age , course , marks , handleDelete}) => {

  return (
    <div>
      <h2>id: {id}</h2>
      <h2>Student name:{name}</h2>
      <h2>Student age:{age}</h2>
      <h3>Course:{course}</h3>
      <h3>Marks:{marks}</h3>
    <button onClick={()=>{handleDelete(id)}}>Delete Student</button>

    </div>
  )
}

export default Students
