import React from 'react';

import {DidUpdate,ShouldUpdate, BeforeUpdate} from './UpdFun';



function App() {
   return (
   <div>
          <ShouldUpdate></ShouldUpdate>
          <BeforeUpdate></BeforeUpdate>
          <DidUpdate></DidUpdate>
    </div>)};

export default App;