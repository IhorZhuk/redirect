import React from 'react';
import {connect} from 'react-redux';

const CodePreview = (props) => {

  let code = `${props.top_left}px ${props.top_right}px ${props.bottom_right}px ${props.bottom_left}px`;

  return (
    <div className="tools-code-preview-sm">
      border-radius: {code};
    </div>
  )
}

const mapStateToProps = state => state.boxRadius
const CodePreviewConnected = connect(mapStateToProps)(CodePreview)

export default CodePreviewConnected;