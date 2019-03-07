import React from 'react';
import Controls from 'Components/box-shadow/controls';

const BoxShadow = (props) => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Controls />
        </div>
        <div className="col-md-8"></div>
      </div>
    </div>
  )
}

export default BoxShadow;