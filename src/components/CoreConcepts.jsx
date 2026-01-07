import CoreConcpts from './Coreconcept/Coreconcept.jsx'
import { CORE_CONCEPTS } from '../data.js'

export default function CoreConcepts (){
  return(
    <section id="core-concepts">
    <h2>Core Concepts</h2>
    <ul>
      {
        CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcpts key={conceptItem.title} {...conceptItem} />
        ))
      }
    </ul>
  </section>
  ) 
}