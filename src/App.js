import "./App.css";
import { useState } from "react";
import Home from "./Components/pages/Home";
import RequirementForm from "./Components/pages/RequirementForm";

function App() {
  const [appState, setappState] = useState("home");
  const [object, setObject] = useState({});

  const sendAppData = () => {
    setappState("requirement");
  };

  const getValues = (requirementData) => {
    setObject(requirementData);
    setappState("home");
  };

  return (
    <div className="App">
      {appState === "home" && (
        <Home btn="Add Requirement" sendData={sendAppData} other={object} />
      )}
      {appState === "requirement" && <RequirementForm add={getValues} />}
    </div>
  );
}

export default App;
