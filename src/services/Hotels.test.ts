import Hotels from './Hotels'
jest.mock('../database')

const hotels = new Hotels()

const workdaysOnly = [
  new Date(2021, 6, 12),
  new Date(2021, 6, 13),
  new Date(2021, 6, 14),
  new Date(2021, 6, 15),
  new Date(2021, 6, 16)
]

const weekendOnly = [
  new Date(2021, 6, 17),
  new Date(2021, 6, 18)
]

const wholeWeek = [...workdaysOnly, ...weekendOnly]

describe('Hotels Service', () => {
  it("Should return the cheapest hotel name for 'Regular' membership type on week days", () => {
    expect(hotels.getCheapestHotelName('Regular', workdaysOnly)).toEqual('Parque das flores (mock)')
  })

  it("Should return the cheapest hotel name for 'Regular' membership type on weekend days", () => {
    expect(hotels.getCheapestHotelName('Regular', weekendOnly)).toEqual('Jardim Botânico (mock)')
  })

  it("Should return the cheapest hotel name for 'Regular' membership type", () => {
    expect(hotels.getCheapestHotelName('Regular', wholeWeek)).toEqual('Jardim Botânico (mock)')
  })

  it("Should return the cheapest hotel name for 'Fidelidade' membership type on week days", () => {
    expect(hotels.getCheapestHotelName('Fidelidade', workdaysOnly)).toEqual('Parque das flores (mock)')
  })

  it("Should return the cheapest hotel name for 'Fidelidade' membership type on weekend days", () => {
    expect(hotels.getCheapestHotelName('Fidelidade', weekendOnly)).toEqual('Mar Atlântico (mock)')
  })

  it("Should return the cheapest hotel name for 'Fidelidade' membership type", () => {
    expect(hotels.getCheapestHotelName('Fidelidade', wholeWeek)).toEqual('Mar Atlântico (mock)')
  })

  it('Should return the name of the hotel with the highest rating when two offers have the same price', () => {
    expect(hotels.getCheapestHotelName('Fidelidade', weekendOnly)).toEqual('Mar Atlântico (mock)')
  })
})
