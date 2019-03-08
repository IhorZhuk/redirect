import React from 'react';
import {connect} from 'react-redux';
import BoxShadowController from 'Controllers/box-shadow';
import ControlGroup from 'Components/form/control-group';
import Toggle from 'Components/form/toggle';
import ColorPicker from 'Components/form/color-picker';

const Controls = (props) => {

  return (
    <div>
      <ControlGroup 
        label="Horizontal Length"
        value={props.h_length}
        onChange={(v) => BoxShadowController.update('h_length', v)}
        min={-200}
        max={200}
        labels={{
          '-200': '-200px',
          '0': '0px',
          '200': '200px'
        }}
      />

      <ControlGroup 
        label="Vertical Length"
        value={props.v_length}
        onChange={(v) => BoxShadowController.update('v_length', v)}
        min={-200}
        max={200}
        labels={{
          '-200': '-200px',
          '0': '0px',
          '200': '200px'
        }}
      />

      <ControlGroup 
        label="Blur"
        value={props.blur}
        onChange={(v) => BoxShadowController.update('blur', v)}
        min={0}
        max={200}
        labels={{
          '0': '0px',
          '200': '200px'
        }}
      />

      <ControlGroup 
        label="Spread"
        value={props.spread}
        onChange={(v) => BoxShadowController.update('spread', v)}
        min={-100}
        max={100}
        labels={{
          '-100': '-100px',
          '0': '0px',
          '100': '100px'
        }}
      />

      <ColorPicker
        label="Shadow color"
        color={props.color}
        onChange={(c) => BoxShadowController.update('color', c)}
      />

      <Toggle
        active={props.inset}
        label='Inset'
        onChange={() => BoxShadowController.update('inset', !props.inset)}
      />

    </div>
  )
}

const mapStateToProps = state => state.boxShadow
const ControlsConnected = connect(mapStateToProps)(Controls)

export default ControlsConnected;