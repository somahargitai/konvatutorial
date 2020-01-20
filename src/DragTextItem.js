import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Text } from 'react-konva';

const DragTextItem = () => {
  const [drageState, setDragState] = useState({
    isDragging: false,
    x: 50,
    y: 50,
  });

  return (
    <Text
      text="Hold me Text"
      x={drageState.x}
      y={drageState.y}
      draggable
      fill={drageState.isDragging ? 'green' : 'black'}
      onDragStart={() => {
        setDragState({
          isDragging: true,
        });
      }}
      onDragEnd={e => {
        setDragState({
          isDragging: false,
          x: e.target.x(),
          y: e.target.y(),
        });
      }}
    />
  );
};

export default DragTextItem;
