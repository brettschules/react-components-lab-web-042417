// Make sure to import React and ReactDOM
import React from 'react'
import ReactDOM from 'react-dom'
const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

// Define these exported classes
export default class OlderCoaster extends React.Component {
  render{
    return(
      <div className="oldercoaster">
      <p>Two grannies having the time of their life!</p>
      <p>Passengers:</p>
      <ul>
        <li>Agnes</li>
        <li>Muriel</li>
      </ul>
    </div>
    )
  }
};
export default class InFrontOfYou extends React.Component {
  render{
    return(
      <div>
      <p>You shouldn't look too far.</p>
      <p>Sometimes, the solution is right in front of you.</p>
    </div>
    )
  }
};
export default class ButcherShop extends React.Component {
  render{
    return(
      <div className="butcher-shop">
      <p>Hello! We have the following products for sale today:</p>
      <ul> {BUTCHER_PRODUCTS.map(b =>
        <li>T{b}</li>
      )}
      </ul>
    </div>
    )
  }
};

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('root')
);
