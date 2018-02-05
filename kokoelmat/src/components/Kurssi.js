import React from 'react'

const Osa = (props) => <p>{props.osa} {props.tehtavia}</p>
const Otsikko = (props) => <h1>{props.kurssi.nimi}</h1>
const Sisalto = (props) => {

  return(
    <div>
    {props.kurssi.osat.map(osa => <Osa key={osa.id} osa={osa.nimi} tehtavia={osa.tehtavia} />)}
    </div>
  )
}
const Yhteensa = (props) => {

  // tehtava 2.2:
  // let yht = 0
  // props.kurssi.osat.map(osa => {yht += osa.tehtavia} )

  // tehtava 2.3:
  let yht = props.kurssi.osat.reduce((a,b) => (a + b.tehtavia),0)

  return(
    <div>
      <p>yhteensä {yht} tehtävää</p>
    </div>
  )
}

const Kurssi = (props) => {
  return(
    <div>
      <Otsikko kurssi={props.kurssi} />
      <Sisalto kurssi={props.kurssi} />
      <Yhteensa kurssi={props.kurssi} />
    </div>
  )
}

export default Kurssi
