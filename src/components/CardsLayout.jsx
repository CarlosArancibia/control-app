import { Card } from './Card';

const cardsData = [
  {
    title: 'Formas',
    duplicates: true,
    icon: '',
  },
  {
    title: 'Scripts',
    duplicates: false,
    icon: '',
  },
];

export const CardsLayout = () => {
  return (
    <section className="h-3/4 col-span-9">
      <h2 className="text-2xl font-semibold">Duplicados</h2>
      <p className="text-gray-300 py-1">En este lugar se mostrarán los archivos duplicados</p>
      <div className="flex gap-8 mt-4">
        {cardsData.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
};
