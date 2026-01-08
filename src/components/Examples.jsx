import {useState} from 'react';
import TebButton from './TebButton/TebButton.jsx';
import { EXAMPLES } from '../data.js';
import Section from'./Section.jsx'

export default function Examples (){
    
  const [selectedTopic, setSelectedTopic] = useState();

  function clickSource (selecteButton){
    setSelectedTopic(selecteButton);
    console.log(selectedTopic);
  }
  
  return (
        <Section id="examples" title="Examples">
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
        </Section>
  )
}