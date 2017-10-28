import React from 'react';
import Example from '../lib';
import { VectorMap } from '../lib';

const App = () => (
  <div>
    <Example />
    <VectorMap mapName={'us_aea'} />
  </div>
);

export default App;
