import React from 'react';
import Example from '../lib';
import { VectorMap } from '../lib';

const App = () => (
  <div>
    <Example />
    <VectorMap mapName={'world_millx'} />
  </div>
);

export default App;
