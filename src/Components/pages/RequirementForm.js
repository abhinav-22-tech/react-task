import React, { useState } from "react";
import Card from "../UI/Card";
import "./RequirementForm.css";

function RequirementForm(props) {
  const [enteredTitle, setTitle] = useState("");
  const [enteredDescription, setDescription] = useState("");
  // const [requirementData, setRequirementData] = useState([]);

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  const [isActive1, setActive1] = useState("card-3-subcard");

  const toggleClass1 = () => {
    if (isActive1 === "card-3-subcard-Active") {
      setActive1("card-3-subcard");
    } else {
      setActive1("card-3-subcard-Active");
    }
  };

  const [isActive2, setActive2] = useState("card-3-subcard");

  const toggleClass2 = () => {
    if (isActive2 === "card-3-subcard-Active") {
      setActive2("card-3-subcard");
    } else {
      setActive2("card-3-subcard-Active");
    }
  };

  const [isActive3, setActive3] = useState("card-3-subcard");

  const toggleClass3 = () => {
    if (isActive3 === "card-3-subcard-Active") {
      setActive3("card-3-subcard");
    } else {
      setActive3("card-3-subcard-Active");
    }
  };

  const addHandler = () => {
    const tempRequirement = {
      title: enteredTitle,
      description: enteredDescription
    };
    // setRequirementData(requirementData.push(tempRequirement));
    props.add(tempRequirement);
  };
  return (
    <>
      <div className="header">
        <div className="left-side">
          <button>x</button>
        </div>
        <div className="middle-side">
          <span>
            <h1>Add Requirement</h1>
            <h3>
              Fields marked with <span>*</span> are required.{" "}
            </h3>
          </span>
        </div>
        <div className="right-side">
          <button className="btn btn-add " onClick={addHandler}>
            ADD
          </button>
        </div>
      </div>

      <div className="card-1">
        <Card>
          <div className="top">
            <h1>Requirement Details</h1>
            <p>
              Enter details to clarify to students what is needed to meet the
              requirement.
            </p>
          </div>
          <hr />
          <div className="bottom">
            <form>
              <label htmlFor="title">
                <span>*</span>Title
              </label>
              <br></br>
              <input
                className="title"
                id="title"
                type="text"
                onChange={titleChangeHandler}
                value={enteredTitle}
              />

              {/* <p>{enteredTitle}</p> */}
              <br />
              <label htmlFor="description">Description</label>
              <br />
              <input
                className="description"
                id="description"
                type="text"
                onChange={descriptionChangeHandler}
                value={enteredDescription}
              />
              <br />
            </form>
          </div>
        </Card>
        <Card>
          <div className="attribute">
            <h1>
              Condition<span>*</span>{" "}
            </h1>
            <p>Select the Condition that will be reviewed.</p>
          </div>
          <hr />
          <div className="card-3">
            <div className="card-3-1">
              <div className={isActive1} onClick={toggleClass1}>
                <span
                  className={`mdi mdi-file ${
                    isActive1 === "card-3-subcard"
                      ? "image-icons"
                      : "image-icons-Active"
                  }`}
                ></span>
                <span
                  className={`card-3-text ${
                    isActive1 === "card-3-subcard"
                      ? "card-3-text"
                      : "card-3-text-Active"
                  }`}
                >
                  File Upload
                </span>
              </div>
              <div>
                <p>
                  Student Uploads a file for review by system or supervisor.
                </p>
              </div>
            </div>
            <div className="card-3-1">
              <div className={isActive2} onClick={toggleClass2}>
                <span
                  className={`mdi mdi-account-check ${
                    isActive2 === "card-3-subcard"
                      ? "image-icons"
                      : "image-icons-Active"
                  }`}
                ></span>
                <span
                  className={`card-3-text ${
                    isActive2 === "card-3-subcard"
                      ? "card-3-text"
                      : "card-3-text-Active"
                  }`}
                >
                  Supervisor Input
                </span>
              </div>
              <div>
                <p>Supervisor manually reviews an overall requirement.</p>
              </div>
            </div>
            <div className="card-3-1">
              <div className={isActive3} onClick={toggleClass3}>
                <span
                  className={`mdi mdi-puzzle ${
                    isActive3 === "card-3-subcard"
                      ? "image-icons"
                      : "image-icons-Active"
                  }`}
                ></span>
                <span
                  className={`card-3-text ${
                    isActive3 === "card-3-subcard"
                      ? "card-3-text"
                      : "card-3-text-Active"
                  }`}
                >
                  Data from Another System
                </span>
              </div>
              <div>
                <p>
                  System pulls Watermark student data to tie to requirement.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
export default RequirementForm;
