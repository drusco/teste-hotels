import { Offer } from './Offer'
import { Hotel } from './Hotel'

export interface Database {
  hotels: Hotel[],
  offers: Offer[],
}
