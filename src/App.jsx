import { useState } from 'react';
import Header from './components/Header/Header.jsx'
import Coreconcept from './components/Coreconcept/Coreconcept.jsx';
import { CORE_CONCEPTS } from './data.js';
import TebButton from './components/TebButton/TebButton.jsx';
import { EXAMPLES } from './data.js';

function App() {
  
  const [selectedTopic, setSelectedTopic] = useState('components')

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
            <TebButton label="Component" onSelect={()=> clickSource('components')} />
            <TebButton label="JSX" onSelect={()=> clickSource('jsx')} />
            <TebButton label="Props" onSelect={()=> clickSource('props')} />
            <TebButton label="State" onSelect={()=> clickSource('state')} />
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
