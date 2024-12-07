import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="container mx-auto ">
      <Navbar />
      <Main />
      <div className="flex space-x-5 justify-center py-20 sm:flex-row flex-col">
        <Cards username="sadam" />
        <Cards username="Ali" />
        <Cards username="Rizwan" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
