
import About from "./components/About"
import ServicesAwards from "./components/ServicesAwards"
import LetsWork from "./components/LetsWork"

export default function Home() {

  return (
    <main className="container  mt-10 flex flex-col gap-6">
      <About/>
      <ServicesAwards/>
      <LetsWork/>
    </main>
  );
}
