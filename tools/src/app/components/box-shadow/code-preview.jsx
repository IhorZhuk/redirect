import React from 'react';
import {connect} from 'react-redux';

const CodePreview = (props) => {

  let shadow = `${props.h_length}px ${props.v_length}px ${props.blur}px ${props.spread}px ${props.color}`;
  if (props.inset) {
    shadow = 'inset ' + shadow;
  }

  return (
    <div className="tools-code-preview-sm">
      box-shadow: {shadow};
    </div>
  )
}

const mapStateToProps = state => state.boxShadow
const CodePreviewConnected = connect(mapStateToProps)(CodePreview)

export default CodePreviewConnected;