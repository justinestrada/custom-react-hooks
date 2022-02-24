import React from 'react';
import { Card } from "../Elements";
import black from "../black.png";
import { useHover } from '../hooks';

const Hover = () => {
  const [isHovered, bind] = useHover(false);
  console.log('isHovered', isHovered);
  return (
    <div>
      <Card {...bind} style={{ background: isHovered ? "var(--purp)" : "var(--black)" }}>
        <h3>Some card</h3>
        <img src={black} />
      </Card>      
    </div>
  )
}

export default Hover
