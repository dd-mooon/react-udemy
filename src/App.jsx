import { useState } from 'react';
import Header from './components/Header/Header.jsx'
import Coreconcept from './components/Coreconcept/Coreconcept.jsx';
import { CORE_CONCEPTS } from './data.js';
import TebButton from './components/TebButton/TebButton.jsx'

function App() {
  
  const [selectedTopic, setSelectedTopic] = useState('Please click a button.')

  function clickSource (selecteButton){
    setSelectedTopic(selecteButton);
    console.log(selectedTopic);
  }

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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TebButton label="Component" onSelect={()=> clickSource('Component')} />
            <TebButton label="JSX" onSelect={()=> clickSource('JSX')} />
            <TebButton label="Props" onSelect={()=> clickSource('Props')} />
            <TebButton label="State" onSelect={()=> clickSource('State')} />
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
