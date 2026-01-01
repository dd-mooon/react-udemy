import Header from './components/Header/Header.jsx'
import Coreconcept from './components/Coreconcept/Coreconcept.jsx';
import { CORE_CONCEPTS } from './data.js';
import TebButton from './components/TebButton/TebButton.jsx'

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <Coreconcept {...CORE_CONCEPTS[0]} />
            <Coreconcept {...CORE_CONCEPTS[1]} />
            <Coreconcept {...CORE_CONCEPTS[2]} />
            <Coreconcept
              image={CORE_CONCEPTS[3].image}
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
            />
          </ul>
        </section>
        <scetion id="examples">
          <h2>Examples</h2>
          <menu>
            <TebButton label="Component" />
            <TebButton label="JSX" />
            <TebButton label="Props" />
            <TebButton label="State" />
          </menu>
        </scetion>
      </main>
    </div>
  );
}

export default App;
