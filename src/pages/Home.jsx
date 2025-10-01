import Hero from "../components/Hero.jsx";
import WhyChoose from "../components/WhyChoose.jsx";
import Reveal from "../components/Reveal.jsx";
import Welcome from "../components/Welcome.jsx";

export default function Home() {
  return (
    <main>
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal delayMs={100}>
        <Welcome />
      </Reveal>
      <Reveal delayMs={200}>
        <WhyChoose />
      </Reveal>
    </main>
  );
}


