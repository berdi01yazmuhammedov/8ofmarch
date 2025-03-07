import React, { useState } from 'react';
import { animated, useSpring } from '@react-spring/web';

interface AnimatedDivProps {
  style: any;
  children: React.ReactNode;
}

const AnimatedDiv = animated('div') as React.ComponentType<AnimatedDivProps>;

const Card: React.FC = () => {
  const [showMessage, setShowMessage] = useState(false);

  const textAnimation = useSpring<{ opacity: number; transform: string }>({
    opacity: showMessage ? 1 : 0,
    transform: showMessage ? 'translateY(0)' : 'translateY(20px)',
    config: { tension: 200, friction: 20 },
  });

  const message = "Поздравляем тебя с этим чудесным днем! Желаем счастья и успехов!";

  return (
    <div className="congratulations">
      <button className="card" onClick={() => setShowMessage(true)}>
        Открыть открытку
      </button>
      {showMessage && (
        <AnimatedDiv style={textAnimation}>
          <p>{message}</p>
        </AnimatedDiv>
      )}
    </div>
  );
};

export default Card;
