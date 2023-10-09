import axios from 'axios'
import React, { useState } from 'react'

const AddEmployee = () => {
    const [inputField,setInputField]=useState(
        {empid:"",empname:"",dob:"",desig:"",joindate:"",qualification:"",email:"",salary:""}
    )
    
    const apiLink="http://localhost:3001/adde"

    const inputHandler=(event)=>{
        setInputField({...inputField,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(inputField)
        axios.post(apiLink,inputField).then(
            (Response)=>{
                if (Response.data.status=="success") {
                    alert("Successfully Inserted")
                    setInputField({empid:"",empname:"",dob:"",desig:"",joindate:"",qualification:"",email:"",salary:""})
                } else {
                    alert("Something Went Wrong") 
                }
            }
        )
    }

  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <h1>Add Employee</h1>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Employee ID</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="empid" value={inputField.empid} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Employee Name</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="empname" value={inputField.empname} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">DOB</label>
                            <input onChange={inputHandler} type="date" name="dob" id="" className="form-control" value={inputField.dob} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Designation</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="desig" value={inputField.desig} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Date Of Joining</label>
                            <input onChange={inputHandler} type="date" name="joindate" id="" className="form-control" value={inputField.joindate} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Qualification</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="qualification" value={inputField.qualification} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Email</label>
                            <input onChange={inputHandler} type="email" name="email" id="" className="form-control" value={inputField.email} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Salary</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="salary" value={inputField.salary} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValue} className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddEmployee