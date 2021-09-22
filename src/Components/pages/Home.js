import "./Home.css";

const Home = (props, data, sendData) => {
  console.log(props);
  return (
    <>
      <div className="card-2">
        <div className="head-1">
          {/* <h1>{title}</h1>
          <p>{description}</p>
          <p>{attribute}</p>
          <hr /> */}
          <button onClick={sendData}>{data}</button>
        </div>
      </div>
    </>
  );
};

export default Home;
