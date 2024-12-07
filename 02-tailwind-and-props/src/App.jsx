import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import Props from "./components/Props";

function App() {
  return (
    <div className="container mx-auto ">
      <Navbar />
      <Main />
      <div className="flex py-20 sm:flex-row flex-col">
        <Cards username="sadam" />
        <Cards />
        <Cards username="Rizwan" />
      </div>
      <Props />
      <Props username="Husnain from props" />
      <Footer />
    </div>
  );
}

export default App;
