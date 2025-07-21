// SfNav.jsx
import React from 'react';

const SfNav = ({ showSearch }) => {
  return (
    <div style={{marginLeft:'400px'}}>
      {showSearch && (
        <input
          type="text"
          placeholder="Search..."
          style={{
            padding: '5px 10px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        />
      )}
    </div>
  );
};

export default SfNav;
