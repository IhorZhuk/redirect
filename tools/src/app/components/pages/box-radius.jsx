import React from 'react';
import Controls from 'Components/box-radius/controls';
import BoxPreview from 'Components/box-radius/box-preview';
import CodePreview from 'Components/box-radius/code-preview';

const BoxRadius = (props) => {

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

export default BoxRadius;