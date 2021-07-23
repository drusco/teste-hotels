import dbConnection from '../database'
import { membership } from '../types/Base'
import { Database } from '../types/Database'

export default class Hotels {
  private readonly db: Database
  constructor () {
    this.db = <Database>dbConnection()
  }

  getCheapestHotelName (membership: membership, dates: Date[]): string | undefined {
    let cheapestHotelId: string

    const uniqueDays = dates.map((date) => date.getDay()).filter((day, index, array) => array.indexOf(day) === index)

    // gets offers available under the same membership and days
    const offers = this.db.offers.filter((offer) => offer.membership === membership && offer.weekdays.some((day) => uniqueDays.includes(day)))

    // order available offers by price ASC
    offers.sort((a, b) => a.price - b.price)

    // no offers available
    if (!offers.length) return

    // one offer available OR first offer is cheaper than the second one
    if (offers.length === 1 || offers[0].price !== offers[1].price) {
      cheapestHotelId = offers[0].hotelId
    } else {
      // first and second offer have the same price;
      if (offers[0].hotelId === offers[1].hotelId) {
        // both offers belong to the same hotel
        cheapestHotelId = offers[0].hotelId
      } else {
        // compare offers by hotel rating
        const comparableHotels = this.db.hotels.filter((hotel) => hotel.id === offers[0].hotelId || hotel.id === offers[1].hotelId)
        // order both hotels by rating DESC
        comparableHotels.sort((a, b) => b.rating - a.rating)
        // return hotel name
        return comparableHotels[0].name
      }
    }

    // find cheapest hotel by its id
    const cheapestHotel = this.db.hotels.find((hotel) => hotel.id === cheapestHotelId)

    return cheapestHotel?.name
  }
}
