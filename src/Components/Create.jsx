import React, { useState } from "react";
import axios from "axios";

//We will be using useNavigate to go from Create page to Read Page after clicking on Submit button.
import { useNavigate } from "react-router-dom";
//========================================================================>>>>
const Create = () => {
  //Now we have to store the data we are creating, thats why we are using useState.
  //setEmail jab aapan pass karte hai onchange mai toh vo data sidha email mai store ho jata hai !!!
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const history = useNavigate();

  //========================================================================>>>>
  const header = { "Access-Control-Allow-Origin": "*" };
  //========================================================================>>>>

  const handleSubmit = (e) => {
    // very important - prevent Default or the page will automatically reload and data will not pass
    e.preventDefault();
    //console to check if the handleSubmit is working or not?
    console.log("Handle Submit is working");

    // Axios Syntax below code
    axios.post("https://6526eec7917d673fd76d3b44.mockapi.io/crud", {
      name: name,
      email: email,
      header //above this handleSubmit button this is defined
    })

    //This is using useNavigate
    // history("/read");  //dont write this way: 

    .then(()=>{
      history("/read");
    });
    
  };
  //========================================================================>>>>
  return (
    <>
      <br />
      <h2>===CREATE===</h2>
      <br />
      <form>
        {/* === Name === */}
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
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
            aria-describedby="emailHelp"
            // we will be passing this onChange function to useState
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};
export default Create;

//======================================================================>>>>>
 /*
    Syntax:-
    axios({

      // Endpoint to send files
      url: "http://localhost:8080/files",
      method: "POST",
      headers: {

          // Add any auth token here
          authorization: "your token comes here",
      },

      // Attaching the form data
      data: formData,
  })
  */