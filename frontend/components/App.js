import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'




function App() {
  const [data, setData] = useState([])
  
  useEffect(() => {
    async function getData() {
      const [resPlanets, resPeople] = await Promise.all([axios.get(urlPlanets), axios.get(urlPeople)])
      
      let characters = resPeople.data.map(char => {
        return { ...char, homeworld: resPlanets.data.find(world => world.id == char.homeworld) }
      })

      setData(characters)
    }
    
    async function getDataFake() {
      const [chars, plnts] = await Promise.all([
        Promise.resolve(require('../../backend/data/people.js')),
        Promise.resolve(require('../../backend/data/planets.js')),
      ])

      let characters = chars.map(char => {
        return { ...char, homeworld: plnts.find(world => world.id == char.homeworld) }
      })
      setData(characters)
    }
    getData()
  }, [])
  
  
  return (
    <div>
      <h2>Star Wars Characters</h2>
      
      {
        data.map(char => <Character key={char.id} data={char} />)
      }
    </div>
  )
}


  
export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
