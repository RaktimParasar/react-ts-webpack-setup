import "./App.css";
import reactlogo from "./assets/react.svg";
import tslogo from "./assets/typescript.svg";

const App = () => {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactlogo} className="logo" alt="React logo" />
        </a>
        <a href="" target="_blank">
          <img src={tslogo} className="logo" alt="Typescript logo" />
        </a>
      </div>
      <div>
        <h1>React + Typescript</h1>
        <p>A starter setup for React with TypeScript and Webpack. </p>
      </div>
      <div>
        {process.env.NODE_ENV} {process.env.name}
      </div>
    </>
  );
};

export default App;
