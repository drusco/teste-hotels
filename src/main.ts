import Hotels from './services/Hotels'

const hotels = new Hotels()

const cheapest = hotels.getCheapestHotelName('Regular', [
  new Date(2021, 6, 17),
  new Date(2021, 6, 18)
])

console.log(cheapest) // Jardim Botânico
