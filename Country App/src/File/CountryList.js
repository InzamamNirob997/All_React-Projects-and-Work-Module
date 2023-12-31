import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import Country from './Country';

function CountryList(props) {
  return (
    <section>
    {props.countries.map((country) => {
      const newCountry = { ...country, id: uuidv4() };
      return <Country {...newCountry} key={newCountry.id} />;
    })}
  </section>
);
}
    

export default CountryList
