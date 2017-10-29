import React from 'react';

const Body = ({header, contentPage}) => (
  <div>
    <header>
      { header ? header() : null }
    </header>
    <main>
      { contentPage ? contentPage() : null }
    </main>
  </div>
);

export default Body;
