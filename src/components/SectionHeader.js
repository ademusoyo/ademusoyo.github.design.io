import React from 'react';

export default function SectionHeader({heading, subheading, imageId}) {
  return (
      <div className="section-header text-white" id={imageId}>
        <div className="layer">
          <div className="section-content">
          <h2>{heading}</h2>
          <h4 className="font-lighter">{subheading}</h4>
          </div>
        </div>
      </div>
  );
}