import React, {Component} from 'react';

class App extends Component{
  render() {
    return(
        <div>
            <label htmlFor="name">Name: </label>
            <input id="name" type="text" placeholder="Type Here" defaultValue="Balaji"/>
        </div>
    );
  }
}
export default App;
