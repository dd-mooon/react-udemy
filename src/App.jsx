import { useState } from 'react';
import Header from './components/Header/Header.jsx'
import Coreconcept from './components/Coreconcept/Coreconcept.jsx';
import { CORE_CONCEPTS } from './data.js';
import TebButton from './components/TebButton/TebButton.jsx';
import { EXAMPLES } from './data.js';

function App() {
  
  const [selectedTopic, setSelectedTopic] = useState();

  function clickSource (selecteButton){
    setSelectedTopic(selecteButton);
    console.log(selectedTopic);
  }

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* <Coreconcept {...CORE_CONCEPTS[0]} />
            <Coreconcept {...CORE_CONCEPTS[1]} />
            <Coreconcept {...CORE_CONCEPTS[2]} />
            <Coreconcept
              image={CORE_CONCEPTS[3].image}
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
            /> */            
            }
            {
              CORE_CONCEPTS.map((conceptItem) => (
                <Coreconcept key={conceptItem.title} {...conceptItem} />
              ))
            }
          </ul>
        </section>
        
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TebButton label="Component" isSelected = {selectedTopic === 'components'} onSelect={()=> clickSource('components')} />
            <TebButton label="JSX" isSelected = {selectedTopic === 'jsx'} onSelect={()=> clickSource('jsx')} />
            <TebButton label="Props" isSelected = {selectedTopic === 'props'} onSelect={()=> clickSource('props')} />
            <TebButton label="State" isSelected = {selectedTopic === 'state'} onSelect={()=> clickSource('state')} />
          </menu>
        
          {!selectedTopic && <p>Plesa click a button.</p>}
          {selectedTopic &&
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          }
        </section>
      </main>
    </>
  );
}

export default App;
