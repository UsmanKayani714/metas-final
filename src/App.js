import "./App.css";
import Home from "./components/Home";
import History from "./components/History";
import Sneak from "./components/Sneak";
import Downfall from "./components/Downfall";
import Giveaway from "./components/giveaway";
import Meta from "./components/Meta";
import Roadmap from "./components/Roadmap";
import Mission from "./components/Mission";
import Team from "./components/Team";
import FAQ from "./components/FAQ";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Home />
      <History />
      <Sneak />
      <Downfall />
      <Meta />
      <Roadmap />
      <Mission />
      <Team />
      <FAQ />
      <Giveaway/>
      <Footer />
    </div>
  );
}

export default App;
