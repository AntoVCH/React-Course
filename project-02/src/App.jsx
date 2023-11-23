import {Fragment } from 'react';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </Fragment>
  );
}

//alternative to fragment will be an empty tag <></> -- this two are replasement to div and not generate that extra div in the code
export default App;
