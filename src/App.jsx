import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import axios from "axios";
import EmployeeContainer from "./components/EmployeeContainer";
import AddEmplyoee from "./components/AddEmplyoee";
const App = () => {
  const [employeeState, setEmplyoeeState] = useState(["still loading"]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => {
        const employees = response.data.data;
        setEmplyoeeState(employees);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2
        className="text-center p-2 shadow"
        style={{ backgroundColor: "#9fff80" }}
      >
        Get Emplyoee Data
      </h2>
      {isLoading ? (
        <span className="placeholder col-6"></span>
      ) : (
        <EmployeeContainer employeeState={employeeState} />
      )}
      <h2
        className="text-center p-2 mt-5 shadow"
        style={{ backgroundColor: "#9fff80" }}
      >
        Post Emplyoee Data
      </h2>
      <AddEmplyoee />
    </div>
  );
};

export default App;
