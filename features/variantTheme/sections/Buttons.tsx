import Button from '../../../components/Button';

const ButtonsSection = () => (
  <section className="mb-5">
    <div className="not-prose rounded-xl overflow-hidden bg-slate-800/75 p-5 border-2 border-gray-700">
      <Button variant="default">Default</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="gradient">Gradient</Button>
      <Button variant="colored-shadows">Colored shadows</Button>
      <Button variant="outline">Outline</Button>
    </div>
  </section>
);

export default ButtonsSection;
