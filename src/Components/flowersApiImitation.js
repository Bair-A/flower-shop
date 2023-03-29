const flowers = [
   {
      price: 25,
      name: 'Lily',
      description: 'Lorem ipsum dolor sit amet, ' +
         'consectetur adipiscing elit. Etiam ultrices, ' +
         'justo vel porta consectetur, ' +
         'nisl dolor scelerisque mauris.',
      img: process.env.PUBLIC_URL + '/img/flowers/1.jpg',
      id: 1,
   },
   {
      price: 57,
      name: 'Peony',
      description: 'Lorem ipsum dolor sit amet, ' +
         'consectetur adipiscing elit. Etiam ultrices, ' +
         'justo vel porta consectetur, ' +
         'nisl dolor scelerisque mauris.',
      img: process.env.PUBLIC_URL + '/img/flowers/2.jpg',
      id: 2,
   },
   {
      price: 61,
      name: 'Popy',
      description: 'Lorem ipsum dolor sit amet, ' +
         'consectetur adipiscing elit. Etiam ultrices, ' +
         'justo vel porta consectetur, ' +
         'nisl dolor scelerisque mauris.',
      img: process.env.PUBLIC_URL + '/img/flowers/3.jpg',
      id: 3,
   },
   {
      price: 44,
      name: 'Tulip',
      description: 'Lorem ipsum dolor sit amet, ' +
         'consectetur adipiscing elit. Etiam ultrices, ' +
         'justo vel porta consectetur, ' +
         'nisl dolor scelerisque mauris.',
      img: process.env.PUBLIC_URL + '/img/flowers/4.jpg',
      id: 4,
   },
   {
      price: 24,
      name: 'Orchid',
      description: 'Lorem ipsum dolor sit amet, ' +
         'consectetur adipiscing elit. Etiam ultrices, ' +
         'justo vel porta consectetur, ' +
         'nisl dolor scelerisque mauris.',
      img: process.env.PUBLIC_URL + '/img/flowers/5.jpg',
      id: 5,
   },
   {
      price: 71,
      name: 'Daisy',
      description: 'Lorem ipsum dolor sit amet, ' +
         'consectetur adipiscing elit. Etiam ultrices, ' +
         'justo vel porta consectetur, ' +
         'nisl dolor scelerisque mauris.',
      img: process.env.PUBLIC_URL + '/img/flowers/6.jpg',
      id: 6,
   },
   {
      price: 61,
      name: 'Aster',
      description: 'Lorem ipsum dolor sit amet, ' +
         'consectetur adipiscing elit. Etiam ultrices, ' +
         'justo vel porta consectetur, ' +
         'nisl dolor scelerisque mauris.',
      img: process.env.PUBLIC_URL + '/img/flowers/7.jpg',
      id: 7,
   },
   {
      price: 16,
      name: 'Gladiolus',
      description: 'Lorem ipsum dolor sit amet, ' +
         'consectetur adipiscing elit. Etiam ultrices, ' +
         'justo vel porta consectetur, ' +
         'nisl dolor scelerisque mauris.',
      img: process.env.PUBLIC_URL + '/img/flowers/8.jpg',
      id: 8,
   },
   {
      price: 44,
      name: 'Dahlia',
      description: 'Lorem ipsum dolor sit amet, ' +
         'consectetur adipiscing elit. Etiam ultrices, ' +
         'justo vel porta consectetur, ' +
         'nisl dolor scelerisque mauris.',
      img: process.env.PUBLIC_URL + '/img/flowers/9.jpg',
      id: 9,
   },
   {
      price: 32,
      name: 'Violet',
      description: 'Lorem ipsum dolor sit amet, ' +
         'consectetur adipiscing elit. Etiam ultrices, ' +
         'justo vel porta consectetur, ' +
         'nisl dolor scelerisque mauris.',
      img: process.env.PUBLIC_URL + '/img/flowers/10.jpg',
      id: 10,
   },
   {
      price: 11,
      name: 'Calla',
      description: 'Lorem ipsum dolor sit amet, ' +
         'consectetur adipiscing elit. Etiam ultrices, ' +
         'justo vel porta consectetur, ' +
         'nisl dolor scelerisque mauris.',
      img: process.env.PUBLIC_URL + '/img/flowers/11.jpg',
      id: 11,
   },
   {
      price: 21,
      name: 'Carnation',
      description: 'Lorem ipsum dolor sit amet, ' +
         'consectetur adipiscing elit. Etiam ultrices, ' +
         'justo vel porta consectetur, ' +
         'nisl dolor scelerisque mauris.',
      img: process.env.PUBLIC_URL + '/img/flowers/12.jpg',
      id: 12,
   },
   {
      price: 32,
      name: 'Cyclamen',
      description: 'Lorem ipsum dolor sit amet, ' +
         'consectetur adipiscing elit. Etiam ultrices, ' +
         'justo vel porta consectetur, ' +
         'nisl dolor scelerisque mauris.',
      img: process.env.PUBLIC_URL + '/img/flowers/13.jpg',
      id: 13,
   },
   {
      price: 12,
      name: 'Iris',
      description: 'Lorem ipsum dolor sit amet, ' +
         'consectetur adipiscing elit. Etiam ultrices, ' +
         'justo vel porta consectetur, ' +
         'nisl dolor scelerisque mauris.',
      img: process.env.PUBLIC_URL + '/img/flowers/14.jpg',
      id: 14,
   },
   {
      price: 44,
      name: 'Gerbera',
      description: 'Lorem ipsum dolor sit amet, ' +
         'consectetur adipiscing elit. Etiam ultrices, ' +
         'justo vel porta consectetur, ' +
         'nisl dolor scelerisque mauris.',
      img: process.env.PUBLIC_URL + '/img/flowers/15.jpg',
      id: 15,
   },
   {
      price: 22,
      name: 'Daffodil',
      description: 'Lorem ipsum dolor sit amet, ' +
         'consectetur adipiscing elit. Etiam ultrices, ' +
         'justo vel porta consectetur, ' +
         'nisl dolor scelerisque mauris.',
      img: process.env.PUBLIC_URL + '/img/flowers/16.jpg',
      id: 16,
   },
   {
      price: 41,
      name: 'Sunflower',
      description: 'Lorem ipsum dolor sit amet, ' +
         'consectetur adipiscing elit. Etiam ultrices, ' +
         'justo vel porta consectetur, ' +
         'nisl dolor scelerisque mauris.',
      img: process.env.PUBLIC_URL + '/img/flowers/17.jpg',
      id: 17,
   },
   {
      price: 13,
      name: 'Dandelion',
      description: 'Lorem ipsum dolor sit amet, ' +
         'consectetur adipiscing elit. Etiam ultrices, ' +
         'justo vel porta consectetur, ' +
         'nisl dolor scelerisque mauris.',
      img: process.env.PUBLIC_URL + '/img/flowers/18.jpg',
      id: 18,
   },
   {
      price: 22,
      name: 'Snowdrop',
      description: 'Lorem ipsum dolor sit amet, ' +
         'consectetur adipiscing elit. Etiam ultrices, ' +
         'justo vel porta consectetur, ' +
         'nisl dolor scelerisque mauris.',
      img: process.env.PUBLIC_URL + '/img/flowers/19.jpg',
      id: 19,
   },
   {
      price: 12,
      name: 'Azalea',
      description: 'Lorem ipsum dolor sit amet, ' +
         'consectetur adipiscing elit. Etiam ultrices, ' +
         'justo vel porta consectetur, ' +
         'nisl dolor scelerisque mauris.',
      img: process.env.PUBLIC_URL + '/img/flowers/20.jpg',
      id: 20,
   }
]

export default flowers;