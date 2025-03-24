
import { useRef, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = '' }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [scale, setScale] = useState(1);
  const [shinePosition, setShinePosition] = useState({ x: '50%', y: '50%' });
  const [shineOpacity, setShineOpacity] = useState(0);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // Calculate rotation based on mouse position
    const rotateXValue = (mouseY - cardCenterY) / 20;
    const rotateYValue = (cardCenterX - mouseX) / 20;
    
    // Update rotation
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
    setScale(1.02);
    
    // Calculate shine effect position
    const x = ((mouseX - rect.left) / rect.width) * 100;
    const y = ((mouseY - rect.top) / rect.height) * 100;
    
    setShinePosition({ x: `${x}%`, y: `${y}%` });
    setShineOpacity(0.3);
  };
  
  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setScale(1);
    setShineOpacity(0);
  };
  
  return (
    <motion.div
      ref={cardRef}
      className={`${className} relative overflow-hidden`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
        transition: 'transform 0.1s ease'
      }}
    >
      <div style={{ transform: 'translateZ(20px)' }}>{children}</div>
      <div 
        className="tilt-card-shine absolute inset-0 pointer-events-none" 
        style={{ 
          background: `radial-gradient(circle at ${shinePosition.x} ${shinePosition.y}, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 50%)`,
          opacity: shineOpacity,
        }}
      />
    </motion.div>
  );
}
