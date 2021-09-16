import "./Home.css";
import { useState } from "react";
import RequirementForm from "../RequirementForm";

const Home = (props) => {
  const [appState, setAppState] = useState("empty");

  const addRequirementHandler = () => {
    setAppState("requirement");
  };

  return (
    <>
      {/* <div className="card-2">
        <div className="head-1">
          <h1>Fingerprint Documentation</h1>
          <p>Make sure to only upload super official fingerprint document</p>
          <p>Attribute: File Upload</p>
          <hr />
          <button onClick={addRequirementHandler}>Add Requirement</button>
        </div>
      </div> */}
      {/* {appState === "requirement" && <RequirementForm />} */}
      <RequirementForm />
    </>
  );
};

export default Home;
