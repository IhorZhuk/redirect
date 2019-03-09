import React from 'react';
import {connect} from 'react-redux';
import TriangleController from 'Controllers/triangle';
import ControlGroup from 'Components/form/control-group';
import ColorPicker from 'Components/form/color-picker';
import DirectionPicker from 'Components/form/direction-picker';

const Controls = (props) => {

  return (
    <div>

      <ControlGroup 
        label="Width"
        value={props.width}
        onChange={(v) => TriangleController.update('width', v)}
        min={0}
        max={100}
        labels={{
          '0': '0px',
          '100': '100px'
        }}
      />
      
      <ControlGroup 
        label="Height"
        value={props.height}
        onChange={(v) => TriangleController.update('height', v)}
        min={0}
        max={100}
        labels={{
          '0': '0px',
          '100': '100px'
        }}
      />

      <DirectionPicker
        value={props.direction}
        onChange={(v) => TriangleController.update('direction', v)}
      />

      <ColorPicker
        label="Color"
        color={props.color}
        onChange={(c) => TriangleController.update('color', c)}
      />


    </div>
  )
}

const mapStateToProps = state => state.triangle
const ControlsConnected = connect(mapStateToProps)(Controls)

export default ControlsConnected;