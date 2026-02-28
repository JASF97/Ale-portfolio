import { Hero, Projects, About, Contact } from "../../components";
import MarqueeText from "../../components/MarqueeText";

export const Landing = () => {
  return (
    <main>
      <Hero />
      <MarqueeText />
      <Projects />
      <About />
      <Contact />
    </main>
  );
};

export default Landing;
