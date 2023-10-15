import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Read = () => {
  //This is to store data which is in the console
  const [data, setData] = useState([])

  //for dark mode 
  const [tabledark, setTableDark]=useState('')

  function getData() {
    //axios returns promice and then it gets handled by .then()
    axios
      .get('https://6526eec7917d673fd76d3b44.mockapi.io/crud')
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      })
  }

  //===============================>
  //Delete Function:
  //===============================>
  function handleDelete(id) {
    axios
      .delete(`https://6526eec7917d673fd76d3b44.mockapi.io/crud/${id}`)
      .then(() => {
        getData()
      })
  }

  //Edit button funcationality. We are storing data in local browser and then accessing it.
  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem('id', id)
    localStorage.setItem('name', name)
    localStorage.setItem('email', email)
  }

  //getData()
  //Whenever we will go to READ page, getData should hit automatically.
  useEffect(() => {
    getData()
  }, [])

  ////------------------------------------------------->>>>
  return (
    <>
      {/* Bootstrap Switch Button */}
      <div className="form-check form-switch">
        <input className="form-check-input" 
               type="checkbox" 
               onClick={()=>{
                  if(tabledark === 'table-dark'){
                    setTableDark("")
                  }else{
                    setTableDark("table-dark");
                  }
               }}/>
      </div>
      {/* //===============================>*/}
      <br />
      <div className="d-flex justify-content-between m-2">
        <h2>===READ===</h2>
        <Link to="/">
          <button className="btn btn-info">Create</button>
        </Link>
      </div>
      <br />
      <table className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn btn-success"
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.email,
                          )
                        }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          )
        })}
      </table>
    </>
  )
}

export default Read
