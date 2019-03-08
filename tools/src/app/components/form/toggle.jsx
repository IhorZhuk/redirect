import React from 'react';
import PropTypes from 'prop-types';

const Toggle = (props) => {

  const active = props.active ? 'is-active' : '';
  const label = props.active ? 'ON' :'OFF';

  return (
    <div>
      <span style={{fontSize:13}}>{props.label}</span>
      <div className={`form-toggle ml-1 ${active}`} onClick={props.onChange}>
        <span></span>
        <label>{label}</label>
      </div>
    </div>
  )
}

Toggle.defaultProps = {
  active: false
}

Toggle.propTypes = {
  active: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string
}

export default Toggle;