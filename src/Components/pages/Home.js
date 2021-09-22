import "./Home.css";

const Home = ({ btn, sendData, other }) => {
  return (
    <>
      <div className="card-2">
        <div className="head-1">
          <h1>{other.title}</h1>
          <h1>{other.description}</h1>
          <hr />
          <button onClick={sendData}>{btn}</button>
        </div>
      </div>
    </>
  );
};

export default Home;
