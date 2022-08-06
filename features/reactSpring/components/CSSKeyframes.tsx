import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const CSSKeyframes = () => {
  const [state, toggle] = useState(true);

  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 }
  });

  return (
    <div
      className="flex items-center	h-full	justify-center"
      onClick={() => toggle(!state)}
    >
      <animated.div
        className="font-bold text-6xl	will-change-[opacity]"
        style={{
          opacity: x.to({ output: [0.1, 1], range: [0, 1] }),
          scale: x.to({
            output: [1, 2, 1], // 實際值
            range: [0, 0.9, 1] // 值對應到執行點
          })
        }}
      >
        click
      </animated.div>
    </div>
  );
};

export default CSSKeyframes;
