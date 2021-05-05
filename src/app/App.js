import { Component } from 'react';
import './App.css';
import React from 'react';
import List from '../component/List';
import request from 'superagent';
// import Data from '../component/Data';

class App extends Component {
  state = {
    newdata: []
  }
  async componentDidMount(){
    const response = await request.get('https://vast-forest-11698.herokuapp.com/api/dogs');
    this.setState({ newdata: response.body });
    console.log(response.body);
  }
  render() {
    const { newdata } = this.state;
    console.log(this.state);
    // const data = this.props.data;
    return (
      <>
        <div className="App">
  
        My React App...
          <img src="acl-logo.png" className="temp-images" alt="acl logo" />
          <List data={newdata} />
          <div>
            {/* <ul>
              {data.map(item => (
                <li key={data.title} data={item} />
              ))}
            </ul> */}
          </div>
        </div>
      </>
    );
  }

}

export default App;
