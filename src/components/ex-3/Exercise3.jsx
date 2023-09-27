import Card from './Card';
import Container from './Container';
import dummyData from './data';
const Exercise3 = () => {
  return (
    <section className="bg-gray-300 text-black flex flex-col justify-center no_scroll">
      <Container>
        {dummyData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </Container>
    </section>
  );
};

export default Exercise3;
