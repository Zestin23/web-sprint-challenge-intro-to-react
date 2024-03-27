import React, { useState} from 'react'

function Character({ data }) {
  const [planets, setPlanets] = useState(false)

  const toggle = () => {setPlanets(!planets)}

  return (
    <div className="character-card" onClick={toggle}>
      <div>
        <h3 className="character-name">{data.name}</h3>
        {planets && <p>Planet: <span className="character-planet">{data.homeworld.name}</span></p>}
      </div>
    </div>
  )


}
  


export default Character
