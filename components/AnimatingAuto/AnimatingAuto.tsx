import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatingAuto = () => {
  const [isOpen, setIsOpen] = useState(true);
  const styles = useSpring({
    width: isOpen ? 124 : 0
  });

  return (
    <div
      className="border-2 border-black	rounded p-5 cursor-pointer	text-center w-32 relative"
      onClick={() => setIsOpen(!isOpen)}
    >
      <animated.div
        className="bg-orange-300 absolute left-0 top-0 -z-10 h-full	"
        style={styles}
      ></animated.div>
      <animated.div>{styles.width.to((x) => x.toFixed(0))}</animated.div>
    </div>
  );
};

export default AnimatingAuto;
