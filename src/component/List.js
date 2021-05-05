import React, { Component } from 'react';

import Data from './Data';


export default class List extends Component {
  render(){
    const data = this.props.data;
    console.log(data);
    return (
      <div>
        <ul>
          {data.map(item => (
            <Data key={data.title} data={item} />
          ))}
        </ul>
      </div>
    );
  }
}