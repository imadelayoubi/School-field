import React ,{ useState,useEffect } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar";




function TeachersList() {
   const [teachers,setTeachers] = useState([])
   const [student,setStudent] = useState([])

  useEffect(()=> {
      axios.get('http://localhost:3002/teacher')
         .then(rst => {
           setTeachers(rst.data[0])
           setStudent(rst.data[1])
         })
  },[])
 


  return (
      <>
      <Sidebar/>
    <div className="teacher-container">
      {teachers.map((teacher, key) => {
        return (
          <div key={key} className="teacher-card">
            <h4>
              <img src={teacher.ImageUrl} style={{ width: 100 }} alt="" />
            </h4>
            <b>
              {teacher.TeacherName} {teacher.TeacherLastName}
            </b>
            <p>{teacher.Field}</p>
            <p>{teacher.Experience}</p>
            <p> Number of Students : {teacher.Students.length}</p>

            <button className="promote-btn">Edit</button>
            <button
              id={teacher._id}
             
              className="fire-btn"
            >
              Kick out{" "}
            </button>
          </div>
        );
      })}

      <div>
     
      </div>
    </div>
    </>

  );
}

export default TeachersList;