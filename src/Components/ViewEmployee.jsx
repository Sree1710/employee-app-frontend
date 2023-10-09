import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from './Header'

const ViewEmployee = () => {
    const [empData, setEmpData] = useState(
        []
    )

    const apiLink = "http://localhost:3001/viewe"
    const [isLoading, setIsLoading] = useState(true)

    const getData = () => {
        axios.get(apiLink).then(
            (Response) => {
                setEmpData(Response.data)
                setIsLoading(false)
            }
        )
    }

    useEffect(() => { getData() }, [])
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <h1>View Employee</h1>
                        </div>
                        <div className="row g-3">
                            {isLoading ? <div class="spinner-border text-secondary" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div> : <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Employee ID</th>
                                            <th scope="col">Employee Name</th>
                                            <th scope="col">DOB</th>
                                            <th scope="col">Designation</th>
                                            <th scope="col">Joining Date</th>
                                            <th scope="col">Qualification</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Salary</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {empData.map(
                                            (value, index) => {
                                                return <tr>
                                                    <th scope="row">{value.empid}</th>
                                                    <td>{value.empname}</td>
                                                    <td>{value.dob}</td>
                                                    <td>{value.desig}</td>
                                                    <td>{value.joindate}</td>
                                                    <td>{value.qualification}</td>
                                                    <td>{value.email}</td>
                                                    <td>{value.salary}</td>
                                                </tr>
                                            }
                                        )}
                                    </tbody>
                                </table>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewEmployee