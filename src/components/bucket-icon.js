import React from 'react';

export default function BucketIcon({ onClick }) {
  return (
    <div className="bucket" onClick={onClick}>
      <img className="bucket__image" src="./static/bucket-icon.svg"/>
    </div>
  );
}
