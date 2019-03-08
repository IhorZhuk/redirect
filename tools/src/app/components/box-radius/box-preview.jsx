import React from 'react';
import {connect} from 'react-redux';

const BoxPreview = (props) => {

  const style = {
    borderRadius: `${props.top_left}px ${props.top_right}px ${props.bottom_right}px ${props.bottom_left}px`
  }

  return (
    <div className="tools-box-preview" style={style}>
    </div>
  )
}

const mapStateToProps = state => state.boxRadius
const BoxPreviewConnected = connect(mapStateToProps)(BoxPreview)

export default BoxPreviewConnected;