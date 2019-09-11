import React from "react";
import "./App.css";
import NewsList from "./components/NewsList";
import NewsProfile from "./components/NewsProfile";

const App: React.FC = () => {

  const [id, setId] = React.useState(42);
  const handleIdChange = React.useCallback(newId => {
    setId(newId);
  }, []);

  return (
      <div className="App">
        <NewsList handleIdChange={handleIdChange}/>
        <NewsProfile id={id}/>
      </div>
  );
};

export default App;
