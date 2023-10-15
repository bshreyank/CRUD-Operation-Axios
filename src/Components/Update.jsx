import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate,Link } from 'react-router-dom'

const Update = () => {
  const [id, setId] = useState(0)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    setId(localStorage.getItem('id'))
    setName(localStorage.getItem('name'))
    setEmail(localStorage.getItem('email'))
  }, [])

  const handleUpdate = (e) => {
    e.preventDefault()
    axios
      .put(`https://6526eec7917d673fd76d3b44.mockapi.io/crud/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        navigate('/read')
      })
  }

  //====================================================>>>>
  return (
    <>
      <h2>===Update===</h2>
      <br />
      <form>
        {/* === Name === */}
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            // we will be passing this onChange function to useState
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br /> {/* === Email === */}
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            // we will be passing this onChange function to useState
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={handleUpdate}
        >
          Update
        </button>
        <Link to='/read'>
          <button className="btn btn-secondary mx-2">Back</button>
        </Link>
      </form>
    </>
  )
}

export default Update
