import React from 'react';

import './style.css';

function ItemInfo({ icon, text, iconName }) {
  return (
    <span className="storyinfo-item">
      <img src={icon} alt={iconName}></img>
      <span className="info">{text}</span>
    </span>
  );
}
export default ItemInfo;
