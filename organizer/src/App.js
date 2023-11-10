import "./App.css";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="App">
      <main>
        <section>
          <Projects />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
