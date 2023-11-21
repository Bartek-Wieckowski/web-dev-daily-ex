export const data = [
  {
    id: 1,
    title: 'U.S Discovery',
    details:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ration neque consequatur natus voluptates quam quo molestias amet in saepe. Molestiae.',
    // options: ['$99 / 6 months', '$189 / 12 months'],
    options: [
      {
        id: 1,
        price: 99,
        term: 6,
        value: 'PriceA',
      },
      {
        id: 2,
        price: 189,
        term: 12,
        value: 'PriceB',
      },
    ],
    specialBadge: false,
  },
  {
    id: 2,
    title: 'World Explorer',
    details:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, sit repellendus magnam expedita cumque eligendi at excepturi pariatur, in architecto laborum recusandae aut voluptates? Aliquam eveniet neque exercitationem id iste!',
    // options: ['$149 / 6 months', '$299 / 12 months'],
    options: [
      {
        id: 3,
        price: 149,
        term: 6,
        value: 'PriceA',
      },
      {
        id: 4,
        price: 299,
        term: 12,
        value: 'PriceB',
      },
    ],
    specialBadge: true,
    specialBadgeText: 'Most popular',
  },
];
