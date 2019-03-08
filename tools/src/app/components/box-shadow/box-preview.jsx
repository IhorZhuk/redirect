import React from 'react';
import {connect} from 'react-redux';

const BoxPreview = (props) => {

  let shadow = `${props.h_length}px ${props.v_length}px ${props.blur}px ${props.spread}px ${props.color}`;
  if (props.inset) {
    shadow = 'inset ' + shadow;
  }

  const style = {
    boxShadow: shadow
  }

  return (
    <div className="tools-box-preview" style={style}>
    </div>
  )
}

const mapStateToProps = state => state.boxShadow
const BoxPreviewConnected = connect(mapStateToProps)(BoxPreview)

export default BoxPreviewConnected;