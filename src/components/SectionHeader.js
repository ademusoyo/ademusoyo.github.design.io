import React from 'react';

export default function SectionHeader({heading, subheading}) {
  return (
      <div className="section-header">
          <div className="section-content">
            <h2 className="section-heading">{heading}</h2>
            <h4 className="font-lighter section-sub-heading">{subheading}</h4>
          </div>
      </div>
  );
}