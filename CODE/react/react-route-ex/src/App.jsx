import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  return (
    <>
     <div className="main-container">
      <Header />
      <About />
      <Contact />
      <Footer />
     </div>
     
    </>
  );
}

export default App;
