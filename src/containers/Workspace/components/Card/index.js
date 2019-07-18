import React from 'react';
import PropTypes from 'prop-types';
import { Card as BPCard, Elevation} from "@blueprintjs/core";
import './styles.css';

function Card({ items = [], ...restProps }) {
  return (
    <BPCard
      interactive
      elevation={Elevation.TWO}
      className="Card"
      {...restProps}
    >
      {items.map((item, index) => (
        <div key={index} className="Item">
          <div className="Label">{item.label}</div>
          {item.children && item.children.map((childItem, childIndex) => (
            <div key={childIndex} className="Children">
              {childItem.label} - {childItem.value}
            </div>
          ))}
        </div>
      ))}
    </BPCard>
  );
}

Card.propTypes = {
  items: PropTypes.instanceOf(Array),
};

Card.defaultProps = {
  items: [],
};

export default Card;