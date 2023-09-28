import Wrapper from './Wrapper';
import Card from './Card';
import dummyData from './data';
const Exercise4 = () => {
  return (
    <section className="bg-blue-100 text-black flex flex-col justify-center no_scroll">
      <Wrapper>
        {dummyData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </Wrapper>
    </section>
  );
};

export default Exercise4;
