import React from 'react';
import {AlphaPicker, TwitterPicker} from 'react-color';
import PropTypes from 'prop-types';

const ColorPicker = (props) => {

  const onChange = (c) => {
    const color = `rgba(${c.rgb.r},${c.rgb.g},${c.rgb.b},${c.rgb.a})`;
    props.onChange(color);
  }

  const colors = ['#000','#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#9900EF']

  return (
    <div className="mb-2">
      <div className="mb-1" style={{fontSize: 13}}>{props.label}</div>
      <TwitterPicker width="269px" className="mb-1" onChange={onChange} color={props.color} colors={colors}/>
      <AlphaPicker width="269px" onChange={onChange} color={props.color}/>
    </div>
  )
}

ColorPicker.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  onChange: PropTypes.func
}

export default ColorPicker;