import { useEffect, useState } from "react";
import About from "./Components/About";
import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import { ThreeCircles } from "react-loader-spinner";

import "./less/App.less"; // Importar el archivo LESS donde definiremos estilos globales

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="bg-slate-900 h-screen flex justify-center items-center">
          <ThreeCircles
            visible={true}
            height={100}
            width={100}
            color="#d946ef"
            ariaLabel="three-circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <div className="bg-slate-900">
          <Nav />
          <Banner />
          <About />
          <Services />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
