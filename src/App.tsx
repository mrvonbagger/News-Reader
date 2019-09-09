import React from "react";
import "./App.css";
import NewsList from "./components/NewsList";
import NewsProfile from "./components/NewsProfile";

const App: React.FC = () => {
  return (
      <div className="App">
        <NewsList />
      </div>
  );
};

export default App;
