import React from 'react';
import {connect} from 'react-redux';

const TrianglePreview = (props) => {

  const style = {
    height: 0,
    width: 0,
    borderStyle: 'solid',
    borderColor: props.border_color,
    borderWidth: props.border_width
  }

  return (
    <div className="tools-triangle-preview" style={style}>
    </div>
  )
}

const mapStateToProps = state => state.triangle
const TrianglePreviewConnected = connect(mapStateToProps)(TrianglePreview)

export default TrianglePreviewConnected;