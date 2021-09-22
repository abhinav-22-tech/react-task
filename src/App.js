import "./App.css";
import { useState } from "react";
import Home from "./Components/pages/Home";
import RequirementForm from "./Components/pages/RequirementForm";

function App() {
  const [appState, setappState] = useState("home");

  const sendAppData = () => {
    setappState("requirement");
  };

  const getValues = (requirementData) => {
    const requirement = {
      ...requirementData,
      id: Math.random().toString(),
    };
    console.log(requirement);
    setappState("home");
  };

  return (
    <div className="App">
      {appState === "home" && (
        <Home
          data="Add Requirement"
          sendData={sendAppData}
          // require={requirementData}
        />
      )}
      {appState === "requirement" && <RequirementForm add={getValues} />}
    </div>
  );
}

export default App;

