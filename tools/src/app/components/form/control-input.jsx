import React from 'react';
import PropTypes from 'prop-types';
import VC from 'Controllers/validation';

const ControlInput = (props) => {

  const onChange = (e) => {
    props.onChange(VC.onlyNumbers(e.target.value))
  }

  const renderUnits = () => {
    if (props.units) {
      return <span className="ml-1">{props.units}</span>
    }
  }

  return (
    <div className="row align-items-center range-input-block">
      <div className="col">
        {props.label}
      </div>
      <div className="col text-right">
        <input type="text" value={props.value} onChange={onChange}/>
        {renderUnits()}
      </div>
    </div>
  )
}

ControlInput.defaultProps = {
  units: 'px'
}

ControlInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func,
  units: PropTypes.string
}

export default ControlInput;