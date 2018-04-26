import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';
    // <SimplerComponent handleClick={undefined} />
        // <SimplerComponent handleClick={()=>{alert("hi")} />
// let changeText= ()=>{alert("hi")}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={undefined} />

  </div>,
  document.getElementById('root')
);
