import React from 'react';
import Slider from 'react-rangeslider';
import PropTypes from 'prop-types';
import ControlInput from 'Components/form/control-input';

const ControlsGroup = (props) => {

  return (
    <div className="mb-4">
      <ControlInput
        label={props.label}
        value={Number(props.value)}
        onChange={props.onChange}
        units={props.units}
      />
      <Slider
        min={props.min}
        max={props.max}
        value={Number(props.value)}
        onChange={(v) => props.onChange(v)}
        labels={props.labels}
        step={props.step}
      />
    </div>
  )
}

ControlsGroup.defaultProps = {
  step: 1
}

ControlsGroup.propTypes = {
  label: PropTypes.string,
  units: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  lables: PropTypes.object,
  step: PropTypes.number
}

export default ControlsGroup;