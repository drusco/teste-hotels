import { Database } from './types/Database'

export default (): Database => ({
  hotels: [
    {
      id: 'parque-das-flores',
      name: 'Parque das flores',
      rating: 3
    },
    {
      id: 'jardim-botanico',
      name: 'Jardim Botânico',
      rating: 4
    },
    {
      id: 'mar-atlantico',
      name: 'Mar Atlântico',
      rating: 5
    }
  ],
  offers: [
    {
      price: 110,
      hotelId: 'parque-das-flores',
      weekdays: [1, 2, 3, 4, 5],
      membership: 'Regular'
    },
    {
      price: 80,
      hotelId: 'parque-das-flores',
      weekdays: [1, 2, 3, 4, 5, 6, 0],
      membership: 'Fidelidade'
    },
    {
      price: 90,
      hotelId: 'parque-das-flores',
      weekdays: [6, 0],
      membership: 'Regular'
    },
    {
      price: 160,
      hotelId: 'jardim-botanico',
      weekdays: [1, 2, 3, 4, 5],
      membership: 'Regular'
    },
    {
      price: 110,
      hotelId: 'jardim-botanico',
      weekdays: [1, 2, 3, 4, 5],
      membership: 'Fidelidade'
    },
    {
      price: 60,
      hotelId: 'jardim-botanico',
      weekdays: [6, 0],
      membership: 'Regular'
    },
    {
      price: 50,
      hotelId: 'jardim-botanico',
      weekdays: [6, 0],
      membership: 'Fidelidade'
    },
    {
      price: 220,
      hotelId: 'mar-atlantico',
      weekdays: [1, 2, 3, 4, 5],
      membership: 'Regular'
    },
    {
      price: 100,
      hotelId: 'mar-atlantico',
      weekdays: [1, 2, 3, 4, 5],
      membership: 'Fidelidade'
    },
    {
      price: 150,
      hotelId: 'mar-atlantico',
      weekdays: [6, 0],
      membership: 'Regular'
    },
    {
      price: 40,
      hotelId: 'mar-atlantico',
      weekdays: [6, 0],
      membership: 'Fidelidade'
    }
  ]
})
