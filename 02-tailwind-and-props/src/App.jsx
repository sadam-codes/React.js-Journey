import React from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";

function App() {
  return (
    <React.Fragment>
      <div>
        <Header />
        <Header />
        <Header />
        <Header />
        <Header />
      </div>
      <div>
        <Cards />
        <Cards />
        <Cards />
      </div>
    </React.Fragment>
  );
}

export default App;
