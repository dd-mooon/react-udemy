import CoreConcpts from './Coreconcept/Coreconcept.jsx'
import { CORE_CONCEPTS } from '../data.js'
import Section from './Section.jsx'

export default function CoreConcepts (){
  return(
    <Section id="core-concepts" title="Core Concepts">
    <ul>
      {
        CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcpts key={conceptItem.title} {...conceptItem} />
        ))
      }
    </ul>
  </Section>
  ) 
}