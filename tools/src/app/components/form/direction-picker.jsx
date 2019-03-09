import React from 'react';
import PropTypes from 'prop-types';

const DirectionPicker = (props) => {

  return (
    <div>
      <div style={{fontSize:13}}>Direction</div>
      <div className="form-direction clearfix">
        {
          props.directions.map((d, i) => {
            return (
              <div
                key={i}
                className={`${props.value == d ? 'is-active' : ''} form-direction-${d.toLowerCase()}`}
                onClick={() => props.onChange(d)}
              >
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

DirectionPicker.defaultProps = {
  directions: ['TOP', 'BOTTOM', 'LEFT','RIGHT', 'BOTTOM_RIGHT', 'BOTTOM_LEFT', 'TOP_RIGHT','TOP_LEFT']
}

DirectionPicker.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default DirectionPicker;