import React from 'react';
import {connect} from 'react-redux';

const CodePreview = (props) => {

  return (
    <div className="tools-code-preview-sm">
      <div className="text-left" style={{display: 'inline-block'}}>
        <div>width: 0;</div>
        <div>height: 0;</div>
        <div>border-style: solid;</div>
        <div>border-width: {props.border_width};</div>
        <div>border-color: {props.border_color};</div>
      </div>
    </div>
  )
}

const mapStateToProps = state => state.triangle
const CodePreviewConnected = connect(mapStateToProps)(CodePreview)

export default CodePreviewConnected;