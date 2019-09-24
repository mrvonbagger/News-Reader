import React from "react";
import 'reset-css';
import "./App.css";
import NewsList from "./components/NewsList";

const App: React.FC = () => {

  return (
      <div className="App">
        <NewsList/>
      </div>
  );
};

export default App;
