import React from 'react';
import Controls from 'Components/triangle/controls';
import TrianglePreview from 'Components/triangle/triangle-preview';
import CodePreview from 'Components/triangle/code-preview';

const TriangleGenerator = (props) => {

  return (
    <div className="tools-body">
      <div className="tools-sidebar">
        <Controls />
      </div>
      <div className="text-center pt-5 pb-5">
        <TrianglePreview />
      </div>
      <CodePreview />
    </div>
  )
}

export default TriangleGenerator;