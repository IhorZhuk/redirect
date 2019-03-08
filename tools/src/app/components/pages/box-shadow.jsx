import React from 'react';
import Controls from 'Components/box-shadow/controls';
import BoxPreview from 'Components/box-shadow/box-preview';
import CodePreview from 'Components/box-shadow/code-preview';

const BoxShadow = (props) => {

  return (
    <div className="tools-body">
      <div className="tools-sidebar">
        <Controls />
      </div>
      <div className="text-center pt-5 pb-5">
        <BoxPreview />
      </div>
      <CodePreview />
    </div>
  )
}

export default BoxShadow;