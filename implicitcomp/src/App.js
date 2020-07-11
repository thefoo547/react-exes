import React from 'react';
import {Counter, Button, Title} from './components/Counter';


const App = ()=>(
  <div>
    <Counter>
      <Title />
      <Button type='decrement' />

      <Button type='increment' />
      <Title>
        {clicks=>(
          <h1>{clicks} Clicks</h1>
        )}
      </Title>
    </Counter>
  </div>
)

export default App;
