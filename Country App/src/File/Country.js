import React from 'react';

const Country = (props) => {
  const { country } = props;
  const { flags, name, capital, population, area } = country;

  return (
    <article>
      <div>
        <img src={flags.png} alt={name.common} />
      </div>
      {/* Display other country information here */}
    </article>
  );
};

export default Country;
