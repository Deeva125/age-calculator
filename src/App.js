import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import youngAdult from "./youngAdult.png";

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
        <div className="d-flex">
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

          <button className="btn btn-warning" onClick={handleModeChange}>
            Change Mode
          </button>
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
          {2023 - year < 3 ? (
            <img
              className="w-100"
              src="https://img.freepik.com/free-vector/cute-baby-crawling-cartoon-character_1308-96878.jpg"
              alt=""
            />
          ) : 2023 - year < 5 ? (
            <img
              className="w-100"
              src="https://img.freepik.com/free-vector/cartoon-toddler-wearing-blue-clothes_1308-106741.jpg?w=2000"
              alt=""
            />
          ) : 2023 - year < 10 ? (
            <img
              className="w-100"
              src="https://img.freepik.com/free-vector/little-boy-waving-hand-white-background_1308-81950.jpg?w=2000"
              alt=""
            />
          ) : 2023 - year < 15 ? (
            <img
              className="w-100"
              src="https://us.123rf.com/450wm/jemastock/jemastock2005/jemastock200505420/jemastock200505420.jpg?ver=6"
              alt=""
            />
          ) : 2023 - year < 25 ? (
            <img className="w-100" src={youngAdult} alt="" />
          ) : 2023 - year < 40 ? (
            <img
              className="w-100"
              src="https://media.istockphoto.com/id/1160624767/vector/smiling-handsome-guy-flat-vector-illustration.jpg?s=612x612&w=0&k=20&c=636Aa-RDEbZQkA0WEpHnhzq0N_4OdNRB28YuBN47Neo="
              alt=""
            />
          ) : 2023 - year < 60 ? (
            <img
              className="w-100"
              src="https://thumbs.dreamstime.com/b/vector-illustration-cartoon-happy-senior-elderly-old-man-cartoon-happy-senior-elderly-old-man-145176324.jpg"
              alt=""
            />
          ) : 2023 - year < 99 ? (
            <img
              className="w-100"
              src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/68217/oldman-clipart-xl.png"
              alt=""
            />
          ) : (
            <img
              className="w-100"
              src="https://clipartix.com/wp-content/uploads/2017/02/Old-man-clip-art-old-men-clipart.png"
              alt=""
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
