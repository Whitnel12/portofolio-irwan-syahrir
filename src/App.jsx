import "./App.css";
import Footer from "./components/Fragments/Footer";
import Navbar from "./components/Fragments/Navbar";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Projects from "./pages/projects";
import { AppProvider } from "./AppContext";

function App() {
  return (
    <AppProvider>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </AppProvider>
  );
}

export default App;
