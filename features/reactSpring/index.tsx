import Center from '../../components/Center';
import AnimatingAuto from './components/AnimatingAuto';
import CSSKeyframes from './components/CSSKeyframes';

const ReactSpring = () => (
  <Center>
    <main>
      <section className="mb-5">
        <h2 className="text-xl mb-2">Animating Auto</h2>
        <AnimatingAuto />
      </section>
      <section className="mb-0">
        <h2 className="text-xl mb-2">CSS Keyframes</h2>
        <CSSKeyframes />
      </section>
    </main>
  </Center>
);

export default ReactSpring;
