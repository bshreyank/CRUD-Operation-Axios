import { BrowserRouter, Routes, Route } from "react-router-dom";

import Create from "./Components/Create";
import Read from "./Components/Read_Delete";
import Update from './Components/Update';

function App() {
  return (
    <>
      <div className="container">
        <h2>Welcome to CRUD operation</h2>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Create />}></Route>
            <Route path="/read" element={<Read />}></Route>
            <Route path="/update" element={<Update />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
