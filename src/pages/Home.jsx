import { Hero, About } from "../components/Home";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        <About />
        {/* Add other page content here */}
      </main>
      
    </div>
  );
}
