import { Header, Hero, Projects, About, Contact, Footer } from "./components";
import "./styles/index.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
