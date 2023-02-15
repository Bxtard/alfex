import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Info from './components/Info';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Info />
    </main>
  );
}
