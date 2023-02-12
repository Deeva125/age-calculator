import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import baby from "./images/baby.png";
import toddler from "./images/toddler.png";
import kid from "./images/kid.png";
import teen from "./images/teen.png";
import youngAdult from "./images/youngAdult.png";
import adult from "./images/adult.png";
import oldMan from "./images/oldMan.png";
import veryOldMan from "./images/veryOldMan.png";
import rip from "./images/rip.png";
import higgs from "./images/higgs.png";

function App() {
  const [year, setyear] = useState(2010);
  function handleOnChange(event) {
    setyear(event.target.value);
  }

  const [mode, setmode] = useState("dark");
  function handleModeChange(event) {
    if (mode == "light") {
      setmode("dark");
    } else {
      setmode("light");
    }
  }
  return (
    <>
      <div
        className={`container-fluid bg-${mode}`}
        style={{ minHeight: "100vh" }}
      >
        <div>
          <button
            className="btn btn-warning float-end"
            onClick={handleModeChange}
          >
            Change Mode
          </button>
        </div>
        <div>
          {" "}
          <div className="input-group mb-3 w-50 m-auto">
            <span
              className={`input-group-text ${
                mode === "dark"
                  ? "bg-secondary border-white text-white"
                  : "bg-secondary bg-opacity-25"
              }`}
              id="inputGroup-sizing-default"
            >
              Year of Birth
            </span>
            <input
              value={year}
              onChange={handleOnChange}
              type="text"
              className={`form-control ${
                mode === "dark"
                  ? "bg-secondary border-white text-white"
                  : "bg-white"
              }`}
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
        </div>

        <div className="text-center">
          <h2 className={`${mode === "dark" ? "text-white" : "text-dark"}`}>
            Your Age is
          </h2>
          <h2
            className={`fs-1 ${mode === "dark" ? "text-white" : "text-dark"}`}
          >
            {2023 - year}
          </h2>
        </div>
        <div className="w-25 m-auto">
          {2023 - year <= 0 ? (
            <img className="w-100" src={higgs} alt="" />
          ) : 2023 - year < 3 ? (
            <img className="w-100" src={baby} alt="" />
          ) : 2023 - year < 5 ? (
            <img className="w-100" src={toddler} alt="" />
          ) : 2023 - year < 13 ? (
            <img className="w-100" src={kid} alt="" />
          ) : 2023 - year < 20 ? (
            <img className="w-100" src={teen} alt="" />
          ) : 2023 - year < 45 ? (
            <img className="w-100" src={youngAdult} alt="" />
          ) : 2023 - year < 60 ? (
            <img className="w-100" src={adult} alt="" />
          ) : 2023 - year < 80 ? (
            <img className="w-100" src={oldMan} alt="" />
          ) : 2023 - year < 99 ? (
            <img className="w-100" src={veryOldMan} alt="" />
          ) : (
            <img className="w-100" src={rip} alt="" />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
