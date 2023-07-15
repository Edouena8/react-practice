import PaintingList from "./PaintingList";
import Section from "./Section";
import paintings from '../paintings.json';

export const App = () => {
  return (
    <div> 
      <Section title={"Топ недели"}>
        <PaintingList items={paintings}/>
      </Section>
    </div>
  );
};
