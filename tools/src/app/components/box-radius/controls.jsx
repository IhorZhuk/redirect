import React from 'react';
import {connect} from 'react-redux';
import BoxRadiusController from 'Controllers/box-radius';
import ControlGroup from 'Components/form/control-group';

const Controls = (props) => {

  const updateAll = (v) => {
    BoxRadiusController.update('all', v);
    BoxRadiusController.update('top_left', v);
    BoxRadiusController.update('top_right', v);
    BoxRadiusController.update('bottom_left', v);
    BoxRadiusController.update('bottom_right', v);
  }

  return (
    <div>
      <ControlGroup 
        label="All corners"
        value={props.all}
        onChange={updateAll}
        min={0}
        max={300}
        labels={{
          '0': '0px',
          '300': '300px'
        }}
      />
      <ControlGroup 
        label="Top left"
        value={props.top_left}
        onChange={(v) => BoxRadiusController.update('top_left', v)}
        min={0}
        max={300}
        labels={{
          '0': '0px',
          '300': '300px'
        }}
      />
      <ControlGroup 
        label="Top right"
        value={props.top_right}
        onChange={(v) => BoxRadiusController.update('top_right', v)}
        min={0}
        max={300}
        labels={{
          '0': '0px',
          '300': '300px'
        }}
      />
      <ControlGroup 
        label="Bottom right"
        value={props.bottom_right}
        onChange={(v) => BoxRadiusController.update('bottom_right', v)}
        min={0}
        max={300}
        labels={{
          '0': '0px',
          '300': '300px'
        }}
      />
      <ControlGroup 
        label="Bottom left"
        value={props.bottom_left}
        onChange={(v) => BoxRadiusController.update('bottom_left', v)}
        min={0}
        max={300}
        labels={{
          '0': '0px',
          '300': '300px'
        }}
      />


    </div>
  )
}

const mapStateToProps = state => state.boxRadius
const ControlsConnected = connect(mapStateToProps)(Controls)

export default ControlsConnected;