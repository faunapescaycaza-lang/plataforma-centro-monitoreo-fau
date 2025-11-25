import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

const CircleNode = ({ data }) => {
  const circleStyle = {
    width: `${data.size}px`,
    height: `${data.size}px`,
    borderRadius: '50%',
    backgroundColor: data.isSubItem ? '#e9f5ff' : '#ecf0f1',
    color: data.isSubItem ? '#34495e' : '#34495e',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: `${data.size / 12}px`,
    fontWeight: 500,
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    padding: '0.5rem',
    boxSizing: 'border-box',
    border: '2px solid transparent', // To prevent size shift on selection
  };

  const handleStyle = {
    width: '1px',
    height: '1px',
    background: 'transparent',
    border: 'none',
  };

  return (
    <div style={circleStyle}>
      <Handle type="target" position={Position.Top} style={handleStyle} />
      <span>{data.label}</span>
      <Handle type="source" position={Position.Bottom} style={handleStyle} />
    </div>
  );
};

export default memo(CircleNode);
