import React, { Component } from 'react';

export class Data extends Component {
  render() {
    const { data } = this.props;
    return (
      <>
        <div>
          {data.title}
        </div>
        <div>
          {data.description}
        </div>
        {/* <img src={data.url} alt="hey"/> */}
        <div>
          {data.year}
        </div>
      </>
    );
  }
}

export default Data;




